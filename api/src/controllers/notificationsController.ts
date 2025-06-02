import { Request, Response } from 'express';
import prisma from '../utils/prisma-client';

export const createNotification = async (req: Request, res: Response) => {
  // @ts-expect-error from middleware
  const fromUserId = req.user.userId;
  const { toUserId } = req.body;

  if (!toUserId) {
    res.status(400).json({ error: 'toUserId is required' });
    return;
  }

  try {
    const newNotification = await prisma.notification.create({
      data: {
        fromUserId,
        toUserId,
        read: false,
      },
    });

    res.status(201).json(newNotification);
  } catch (error) {
    console.error('POST /notifications error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getNotifications = async (req: Request, res: Response) => {
  // @ts-expect-error from middleware
  const userId = req.user.userId;

  try {
    const notifications = await prisma.notification.findMany({
      where: { toUserId: userId },
      orderBy: { createdAt: 'desc' },
      include: {
        fromUser: {
          select: { firstName: true, lastName: true },
        },
      },
    });

    res.status(200).json(notifications);
  } catch (error) {
    console.error('GET /notifications error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const readNotification = async (req: Request, res: Response) => {
  // @ts-expect-error from middleware
  const userId = req.user.userId;
  const { notificationId } = req.body;

  if (!notificationId) {
    res.status(400).json({ error: 'notificationId is required' });
    return;
  }

  try {
    const notification = await prisma.notification.findUnique({
      where: { id: notificationId },
    });

    if (!notification || notification.toUserId !== userId) {
      res.status(404).json({ error: 'Notification not found' });
      return;
    }

    await prisma.notification.update({
      where: { id: notificationId },
      data: { read: true },
    });

    res.json({ success: true });
  } catch (error) {
    console.error('POST /notification/read error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
