'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { loginUser } from '@/app/apifolder/auth';
import type { LoginCredentials } from '@/app/apifolder/auth';

export default function LoginForm() {
  const router = useRouter();

  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await loginUser(credentials);
      const token = data.token;
      const role = data.user?.role || 'user';

      if (token) {
        Cookies.set('user', JSON.stringify(data.user), { expires: 7 });

        switch (role) {
          case 'admin':
            router.push('/admin');
            break;
          case 'seller':
            router.push('/seller');
            break;
          default:
            router.push('/user');
        }
      } else {
        alert('Login failed: No token received');
      }
    } catch (error: any) {
      alert(error.message || 'Something went wrong');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-md shadow-blue-400 rounded-2xl flex flex-col lg:flex-row w-full max-w-5xl overflow-hidden">
        {/* Left: Login Form */}
        <div className="w-full lg:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Login</h2>
          <form onSubmit={handleLogin} className="space-y-5">
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={credentials.email}
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white w-full py-3 rounded hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          <h4 className="text-center mt-6 text-sm text-gray-600">
            Don’t have an account?{' '}
            <span
              className="underline cursor-pointer hover:text-gray-800"
              onClick={() => router.push('/register')}
            >
              Sign up
            </span>
          </h4>
        </div>

        {/* Right: Image */}
        <div className="hidden lg:flex w-1/2 bg-white justify-center items-center relative p-10">
          <img
            src="/Images/login-Vector.jpg"
            alt="Login illustration"
            className="w-3/4 object-contain"
          />
          <p className="absolute bottom-6 text-sm text-gray-700">
            Have A Nice Day
          </p>
        </div>
      </div>
    </div>
  );
}
