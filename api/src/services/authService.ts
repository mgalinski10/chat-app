import prisma from '../utils/prisma-client';
import { hashPassword, comparePasswords } from '../utils/hash';
import { generateAccessToken } from '../utils/jwt';

export const registerUser = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
) => {
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) throw new Error('User already exists');

  const hashedPassword = await hashPassword(password);
  const newUser = await prisma.user.create({
    data: { email, password: hashedPassword, firstName, lastName },
  });

  return generateAccessToken(newUser.id);
};

export const loginUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) throw new Error('Invalid credentials');

  const isValid = await comparePasswords(password, user.password);
  if (!isValid) throw new Error('Invalid credentials');

  return generateAccessToken(user.id);
};
