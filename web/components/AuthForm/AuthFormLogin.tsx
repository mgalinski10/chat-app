import Link from 'next/link';
import React from 'react';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function AuthFormLogin() {
  const token = await cookies();
  const accessToken = token.get('accessToken');

  if (accessToken) {
    redirect('/dashboard');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Welcome Back
        </h2>

        <form className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-blue-800 mb-1"
            >
              Email
            </label>
            <input
              required
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-blue-800 mb-1"
            >
              Password
            </label>
            <input
              required
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{' '}
          <Link className="text-blue-600 hover:underline" href={'/register'}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
