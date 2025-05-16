'use client';

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FieldValues, useForm } from 'react-hook-form';

export default function AuthFormRegister() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const { firstName, lastName, email, password } = data;
    try {
      const res = await axios.post(
        'http://localhost:5000/auth/register',
        {
          firstName,
          lastName,
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        },
      );

      if (res.status === 201) {
        reset();
        // TODO: Meaby short form to get more information about user?
        router.push('/messages');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) {
          setError('root', {
            type: 'server',
            // TODO: HAX, better error handling example: (err) => return <p>err.message<p>
            message: `${error.response.data.errors[0].message}`,
          });
        } else if (error.response?.status === 409) {
          setError('root', {
            type: 'server',
            message: `User already exists`,
          });
        }
      } else {
        setError('root', {
          type: 'server',
          message: 'Something went wrong. Try again later.',
        });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">
          Sign up
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-blue-800 mb-1">
              First name
            </label>
            <input
              {...register('firstName', {
                required: 'First name is required',
              })}
              type="text"
              className="w-full px-4 py-2 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="John"
            />
            {errors.firstName && (
              <p className="text-red-500 text-center mt-1">{`${errors.firstName.message}`}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-800 mb-1">
              Last name
            </label>
            <input
              {...register('lastName', {
                required: 'Last name is required',
              })}
              type="text"
              className="w-full px-4 py-2 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Nash"
            />
            {errors.lastName && (
              <p className="text-red-500 text-center mt-2">{`${errors.lastName.message}`}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-800 mb-1">
              Email
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
              })}
              // type="email"
              className="w-full px-4 py-2 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-center mt-2">{`${errors.email.message}`}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-blue-800 mb-1">
              Password
            </label>
            <input
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 10,
                  message: 'Password must be at least 10 characters',
                },
              })}
              type="password"
              className="w-full px-4 py-2 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-red-500 text-center mt-2">{`${errors.password.message}`}</p>
            )}
          </div>
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-200"
          >
            Sign up
          </button>
          {errors.root && (
            <p className="text-red-500 text-center mt-1">{`${errors.root.message}`}</p>
          )}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link className="text-blue-600 hover:underline" href={'/login'}>
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
