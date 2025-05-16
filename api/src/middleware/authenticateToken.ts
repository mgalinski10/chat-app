import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

if (!ACCESS_TOKEN_SECRET) {
  throw new Error('ACCESS_TOKEN_SECRET is missing');
}

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies.accessToken;

  if (!token) {
    res.status(401).json({ message: 'Access token is missing' });
    return;
  }

  try {
    const user = jwt.verify(token, ACCESS_TOKEN_SECRET);
    // @ts-expect-error add user to request
    req.user = user;
    next();
  } catch (err) {
    console.error(`Token verification failed: ${err}`);
    res.clearCookie('accessToken');
    res.status(403).json({ message: 'Token is invalid or expired' });
    return;
  }
};
