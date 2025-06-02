import { Request, Response } from 'express';
import prisma from '../utils/prisma-client';
import { io } from '../index';

export const getMessages = async (req: Request, res: Response) => {
  try {
    // @ts-expect-error from middleware
    const senderId = req.user.userId;
    const receiverId = parseInt(req.params.userId);

    if (!receiverId) {
      res.status(400).json({ error: 'Missing receiverId' });
      return;
    }

    const messages = await prisma.message.findMany({
      where: {
        OR: [
          { senderId, receiverId },
          { senderId: receiverId, receiverId: senderId },
        ],
      },
      orderBy: { createdAt: 'asc' },
    });

    res.json(messages);
    return;
  } catch (err) {
    console.error('Error fetching messages:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const postMessage = async (req: Request, res: Response) => {
  try {
    // @ts-expect-error from middleware
    const senderId = req.user.userId;
    const { text, receiverId } = req.body;

    if (!text || !receiverId) {
      res.status(400).json({ error: 'Missing fields' });
      return;
    }

    const message = await prisma.message.create({
      data: {
        text,
        senderId,
        receiverId: parseInt(receiverId),
      },
    });

    io.to(`user:${receiverId}`).emit('newMessage', message);

    res.status(201).json(message);
  } catch (err) {
    console.error('Error sending message:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
