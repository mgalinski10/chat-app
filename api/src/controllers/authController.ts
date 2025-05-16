import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/authService';

export const register = async (req: Request, res: Response) => {
  const { email, password, firstName, lastName } = req.body;
  try {
    const token = await registerUser(email, password, firstName, lastName);

    res
      .cookie('accessToken', token, {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 1000 * 60 * 15,
      })
      .status(201)
      .json();

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

    res
      .cookie('accessToken', token, {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 1000 * 60 * 15,
      })
      .status(200)
      .json({ message: 'Logged in successfuly.' });

    // #TODO provide type for error if it's possible
    // eslint-disable-next-line
  } catch (error: any) {
    res.status(401).json({ error: error.message });
  }
};

export const logout = async (req: Request, res: Response) => {
  res
    .clearCookie('accessToken', {
      httpOnly: true,
      sameSite: 'strict',
    })
    .status(200)
    .json({ message: 'Logged out successfuly.' });
};
