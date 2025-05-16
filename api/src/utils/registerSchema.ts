import Joi from 'joi';

export const registerSchema = Joi.object({
  firstName: Joi.string().min(2).max(30).required().messages({
    'string.empty': 'Name is required',
    'string.min': 'First name must to be at least 3 characters',
  }),
  lastName: Joi.string().min(2).max(30).required().messages({
    'string.empty': 'Last name is required',
    'string.min': 'Last name must to be at least 3 characters',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Email must be valid',
    'string.empty': 'Email is required',
  }),
  password: Joi.string().min(10).required().messages({
    'string.empty': 'Password is required',
    'string.min': 'Password must be at least 10 characters',
  }),
});
