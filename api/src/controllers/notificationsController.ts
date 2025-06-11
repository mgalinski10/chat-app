import { Request, Response } from 'express';
import prisma from '../utils/prisma-client';
import { Notification } from '../models/Notification.model';

// export const createNotification = async (req: Request, res: Response) => {
//   // @ts-expect-error from middleware
//   const fromUserId = req.user.userId;
//   const { toUserId } = req.body;

//   if (!toUserId) {
//     res.status(400).json({ error: 'toUserId is required' });
//     return;
//   }

//   try {
//     const newNotification = await prisma.notification.create({
//       data: {
//         fromUserId,
//         toUserId,
//         read: false,
//       },
//     });

//     res.status(201).json(newNotification);
//   } catch (error) {
//     console.error('POST /notifications error:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

export const getNotifications = async (req: Request, res: Response) => {
  // @ts-expect-error from middleware
  const userId = req.user.userId;

  try {
    const notifications = await Notification.find({ toUserId: userId })
      .sort({ createdAt: -1 })
      .lean();

    const fromUserIds = [...new Set(notifications.map((n) => n.fromUserId))];
    const users = await prisma.user.findMany({
      where: { id: { in: fromUserIds } },
      select: { id: true, firstName: true, lastName: true },
    });

    const userMap = new Map(users.map((u) => [u.id, u]));

    const enriched = notifications.map((n) => ({
      ...n,
      fromUser: userMap.get(n.fromUserId) || null,
    }));

    res.json(enriched);
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
    const notification = await Notification.findById(notificationId);

    if (!notification || notification.toUserId !== userId) {
      res.status(404).json({ error: 'Notification not found' });
      return;
    }

    notification.read = true;
    await notification.save();

    res.json({ success: true });
  } catch (error) {
    console.error('POST /notification/read error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
