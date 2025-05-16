'use client';

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm, FieldValues } from 'react-hook-form';

export default function AuthFormLogin() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const { email, password } = data;
    try {
      const res = await axios.post(
        'http://localhost:5000/auth/login',
        {
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

      if (res.status === 200) {
        reset();
        router.push('/messages');
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        setError('root', {
          type: 'server',
          message: 'Invalid email or password',
        });
      } else {
        setError('root', {
          type: 'server',
          message: 'Something went wrong. Try again later.',
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-blue-800 mb-1"
            >
              Email
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
              })}
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-center mt-1">{`${errors.email.message}`}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-blue-800 mb-1"
            >
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
              id="password"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-red-500 text-center mt-1">{`${errors.password.message}`}</p>
            )}
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Log In
          </button>
          {errors.root && (
            <p className="text-red-500 text-center mt-1">{`${errors.root.message}`}</p>
          )}
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{' '}
          <Link className="text-blue-600 hover:underline" href={'/register'}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
