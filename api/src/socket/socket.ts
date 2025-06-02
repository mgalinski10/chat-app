import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { Server } from 'socket.io';
import { Server as HTTPServer } from 'http';
import { getAccessToken } from '../utils/getAccessToken';
import prisma from '../utils/prisma-client';

dotenv.config();

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

if (!ACCESS_TOKEN_SECRET) {
  throw new Error('ACCESS_TOKEN_SECRET is missing');
}

async function getUserStatusFromDB(userId: number) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { status: true },
  });
  console.log('checking status...');
  return user?.status || 'OFFLINE';
}

export const setupSocket = (server: HTTPServer) => {
  const io = new Server(server, {
    cors: {
      origin: 'http://localhost:3000',
      credentials: true,
    },
  });

  io.use((socket, next) => {
    const cookie = socket.handshake.headers.cookie;

    if (!cookie) {
      return next(new Error('No cookie provided'));
    }

    const token = getAccessToken(cookie);

    if (!token) return next(new Error('No token provided'));

    try {
      const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);
      socket.data.user = decoded;
      next();
    } catch (err) {
      console.log('JWT error:', err);
      return next(new Error('Invalid token'));
    }
  });

  io.on('connection', async (socket) => {
    console.log('🟢 Socket connected:', socket.id, 'User:', socket.data.user);
    const userId = socket.data.user.userId;

    socket.join(`user:${userId}`);

    await prisma.user.update({
      where: { id: userId },
      data: { status: 'ONLINE' },
    });

    const intervalId = setInterval(async () => {
      const newStatus = await getUserStatusFromDB(socket.data.user.userId);

      io.to(`user:${userId}`).emit('user:statusUpdate', {
        userId,
        status: newStatus,
      });
    }, 5000);

    socket.on('status:update', async (newStatus: 'ONLINE' | 'OFFLINE') => {
      await prisma.user.update({
        where: { id: userId },
        data: { status: newStatus },
      });

      io.emit('user:statusUpdate', { userId, status: newStatus });
    });

    socket.on('disconnect', async () => {
      clearInterval(intervalId);
      await prisma.user.update({
        where: { id: userId },
        data: { status: 'OFFLINE' },
      });
    });
  });

  return io;
};
