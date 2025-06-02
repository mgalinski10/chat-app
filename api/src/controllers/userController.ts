import { Request, Response } from 'express';
import prisma from '../utils/prisma-client';

export const getMe = async (req: Request, res: Response) => {
  // @ts-expect-error: user has been passed in middleware
  const user = req.user;

  if (!user) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  const { userId } = user;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
      },
    });

    res.status(200).json({ user });
  } catch (err) {
    console.error(`Error find user: ${err}`);

    res.status(404).json({ message: 'User not found.' });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  // @ts-expect-error from middleware
  const userId = req.user.userId;

  // HAX
  try {
    const friends = await prisma.friend.findMany({
      where: {
        OR: [{ userId }, { friendId: userId }],
      },
    });

    const sentRequests = await prisma.friendRequest.findMany({
      where: { senderId: userId },
    });

    const receivedRequests = await prisma.friendRequest.findMany({
      where: { receiverId: userId },
    });

    const excludedUserIds = new Set([
      userId,
      ...friends.map((f) => (f.userId === userId ? f.friendId : f.userId)),
      ...sentRequests.map((r) => r.receiverId),
      ...receivedRequests.map((r) => r.senderId),
    ]);

    const potentialFriends = await prisma.user.findMany({
      where: {
        id: {
          notIn: Array.from(excludedUserIds),
        },
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
      },
    });

    res.json(potentialFriends);
  } catch (error) {
    console.error('Error get all user:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        status: true,
      },
    });

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.json(user);
  } catch (err) {
    console.error('Error getting user:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};
