import { Request, Response } from 'express';
import prisma from '../utils/prisma-client';

export enum RequestStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}

export const sendContactRequest = async (req: Request, res: Response) => {
  //   @ts-expect-error from middleware
  const senderId = req.user.userId;
  const receiverId = req.body.receiverId;

  if (senderId === receiverId) {
    res.status(400).json("You can't add yourself.");
    return;
  }

  try {
    const existing = await prisma.friendRequest.findFirst({
      where: {
        OR: [
          { senderId: senderId, receiverId: receiverId },
          { senderId: receiverId, receiverId: senderId },
        ],
      },
    });

    if (existing) {
      if (existing.status === RequestStatus.REJECTED) {
        await prisma.friendRequest.update({
          where: {
            senderId_receiverId: {
              senderId: existing.senderId,
              receiverId: existing.receiverId,
            },
          },
          data: {
            status: RequestStatus.PENDING,
          },
        });

        res.status(200).json({ message: 'Friend request re-sent' });
        return;
      }

      res.status(400).json({ message: 'Friend request already exists' });
      return;
    }

    await prisma.friendRequest.create({
      data: {
        senderId,
        receiverId,
      },
    });

    await prisma.notification.create({
      data: {
        fromUserId: senderId,
        toUserId: receiverId,
        read: false,
      },
    });

    res.status(200).json({ message: 'Sent friend request' });
    return;
  } catch (error) {
    console.error(`Error while friend request: ${error}`);
    res.status(500).json('Something went wrong');
  }
};

export const acceptContactRequest = async (req: Request, res: Response) => {
  // @ts-expect-error from middleware
  const receiverId = req.user.userId;
  const senderId = req.body.senderId;

  if (!senderId) {
    res
      .status(400)
      .json({ message: `Missing senderId in request body ${senderId}` });
    return;
  }

  try {
    const request = await prisma.friendRequest.findUnique({
      where: {
        senderId_receiverId: {
          senderId,
          receiverId,
        },
      },
    });

    if (!request) {
      res.status(404).json({ message: 'Friend request not found' });
      return;
    }

    if (request.status === RequestStatus.ACCEPTED) {
      res.status(400).json({ message: 'Request already accepted' });
      return;
    }

    await prisma.$transaction([
      prisma.friend.create({
        data: {
          userId: senderId,
          friendId: receiverId,
        },
      }),
      prisma.friend.create({
        data: {
          userId: receiverId,
          friendId: senderId,
        },
      }),
      prisma.friendRequest.update({
        where: {
          senderId_receiverId: {
            senderId,
            receiverId,
          },
        },
        data: {
          status: RequestStatus.ACCEPTED,
        },
      }),
    ]);

    res.status(200).json({ message: 'Friend request accepted' });
    return;
  } catch (error) {
    console.error('Error accepting friend request:', error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const declineContactRequest = async (req: Request, res: Response) => {
  // @ts-expect-error from middleware
  const receiverId = req.user.userId;
  const { senderId } = req.body;

  if (!senderId) {
    res.status(400).json({ message: 'Missing senderId' });
    return;
  }

  try {
    const existingRequest = await prisma.friendRequest.findUnique({
      where: {
        senderId_receiverId: {
          senderId,
          receiverId,
        },
      },
    });

    if (!existingRequest) {
      res.status(404).json({ message: 'Friend request not found' });
      return;
    }

    await prisma.friendRequest.delete({
      where: {
        senderId_receiverId: {
          senderId,
          receiverId,
        },
      },
    });

    res.status(200).json({ message: 'Friend request declined' });
    return;
  } catch (error) {
    console.error('Decline request error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getContacts = async (req: Request, res: Response) => {
  // @ts-expect-error - middleware
  const userId = req.user.userId;

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        friends: {
          include: {
            friend: true,
          },
        },
        blockedUsers: {
          select: {
            blockedId: true,
          },
        },
        blockedBy: {
          select: {
            blockerId: true,
          },
        },
      },
    });

    if (!user) {
      res.status(404).json('Friends not found.');
      return;
    }

    const blockedIds = user.blockedUsers.map((block) => block.blockedId);
    const blockedByIds = user.blockedBy.map((block) => block.blockerId);

    const filteredFriends = user.friends.filter(
      (friend) =>
        !blockedIds.includes(friend.friend.id) &&
        !blockedByIds.includes(friend.friend.id),
    );

    const mappedFriends = filteredFriends.map((friend) => {
      return {
        id: friend.friend.id,
        firstName: friend.friend.firstName,
        lastName: friend.friend.lastName,
        email: friend.friend.email,
      };
    });

    res.status(200).json(mappedFriends);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getSentRequests = async (req: Request, res: Response) => {
  // @ts-expect-error - from middleware
  const userId = req.user.userId;

  try {
    const requests = await prisma.friendRequest.findMany({
      where: {
        senderId: userId,
        status: RequestStatus.PENDING,
      },
      include: {
        receiver: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
    });

    const formatted = requests.map((req) => ({
      id: req.id,
      status: req.status,
      sentTo: req.receiver,
    }));

    res.status(200).json(formatted);
  } catch (error) {
    console.error('Error fetching sent requests:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getReceivedRequests = async (req: Request, res: Response) => {
  // @ts-expect-error - from middleware
  const userId = req.user.userId;

  try {
    const requests = await prisma.friendRequest.findMany({
      where: {
        receiverId: userId,
        status: RequestStatus.PENDING,
      },
      include: {
        sender: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
    });

    const formatted = requests.map((req) => ({
      id: req.id,
      status: req.status,
      sentBy: req.sender,
    }));

    res.status(200).json(formatted);
  } catch (error) {
    console.error('Error fetching received requests:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const blockUser = async (req: Request, res: Response) => {
  // @ts-expect-error - from middleware
  const blockerId = req.user.userId;
  const { blockedId } = req.body;

  if (!blockedId) {
    res.status(400).json({ message: 'Missing blockedId' });
    return;
  }
  if (blockedId === blockerId) {
    res.status(400).json({ message: 'Cannot block yourself' });
    return;
  }

  try {
    await prisma.block.create({
      data: { blockerId, blockedId },
    });
    res.status(200).json({ message: 'User blocked' });
    return;
  } catch (error) {
    // @ts-expect-error i dont know the type at the moment
    if (error.code === 'P2002') {
      res.status(409).json({ message: 'Already blocked' });
      return;
    }
    console.error('Block user error:', error);
    res.status(500).json({ message: 'Internal server error' });
    return;
  }
};

export const unblockUser = async (req: Request, res: Response) => {
  // @ts-expect-error - from middleware
  const blockerId = req.user.userId;
  const { blockedId } = req.body;

  if (!blockedId) {
    res.status(400).json({ message: 'Missing blockedId' });
    return;
  }

  try {
    const existingBlock = await prisma.block.findUnique({
      where: {
        blockerId_blockedId: { blockerId, blockedId },
      },
    });

    if (!existingBlock) {
      res.status(404).json({ message: 'Block entry not found' });
      return;
    }

    await prisma.block.delete({
      where: {
        blockerId_blockedId: { blockerId, blockedId },
      },
    });

    res.status(200).json({ message: 'User unblocked' });
  } catch (error) {
    console.error('Unblock user error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getBlockedUsers = async (req: Request, res: Response) => {
  // @ts-expect-error - from middleware
  const blockerId = req.user.userId;

  try {
    const blocked = await prisma.block.findMany({
      where: { blockerId },
      include: {
        blocked: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },
      },
    });

    const result = blocked.map((entry) => entry.blocked);
    res.status(200).json(result);
    return;
  } catch (error) {
    console.error('Get blocked users error:', error);
    res.status(500).json({ message: 'Internal server error' });
    return;
  }
};
