import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/authService';

export const register = async (req: Request, res: Response) => {
  const { email, password, firstName, lastName } = req.body;
  try {
    const token = await registerUser(email, password, firstName, lastName);
    res.status(201).json({ token });
    // #TODO provide type for error if it's possible
    // eslint-disable-next-line
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const token = await loginUser(email, password);
    res.status(200).json({ token });
    // #TODO provide type for error if it's possible
    // eslint-disable-next-line
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
};
