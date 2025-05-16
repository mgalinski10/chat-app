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
