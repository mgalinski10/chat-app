import { z } from 'zod';

export const registerSchema = z.object({
  firstName: z
    .string()
    .min(3, 'First name must be at least 3 characters')
    .max(50, "First name can't be longer than 50 characters"),

  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, "Last name can't be longer than 50 characters"),

  email: z.string().email('Invalid email address'),

  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(50, 'Password too long'),
});
