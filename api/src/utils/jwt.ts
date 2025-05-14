import jwt from 'jsonwebtoken';

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

if (!ACCESS_TOKEN_SECRET) {
  throw new Error('Missing ACCESS_TOKEN_SECRET in environment');
}

export const generateAccessToken = (userId: number) => {
  return jwt.sign({ userId }, ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
};
