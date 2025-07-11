'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { LoginCredentials,loginUser } from '@/app/apifolder/auth';

export default function LoginPage() {
  const router = useRouter();
  const [credentials, setCredentials] = useState<LoginCredentials>({ email: '', password: '' });
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setIsLoading(true);

    try {
      const data = await loginUser(credentials);

      Cookies.set('token', data.token);
      Cookies.set('user', JSON.stringify(data.user));

      setMessage({ type: 'success', text: `Logged in as ${data.user.role}` });

      setTimeout(() => {
        if (data.user.role === 'admin') router.push('/admin');
        else if (data.user.role === 'seller') router.push('/seller');
        else router.push('/user');
      }, 1000);
    } catch (err: any) {
      setMessage({ type: 'error', text: err.message });
    } finally {
      setIsLoading(false);1
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 font-inter">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-4xl p-8 flex flex-col lg:flex-row overflow-hidden">
        <div className="w-full lg:w-1/2 p-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center lg:text-left">Login</h2>

          {message && (
            <div className={`p-3 rounded-md mb-4 text-sm ${
              message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={credentials.email}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 py-3 px-1 text-lg rounded-md focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 py-3 px-1 text-lg rounded-md focus:outline-none focus:border-blue-500"
              required
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 text-white w-full py-3 rounded-lg text-xl font-semibold hover:bg-blue-700 transition duration-300"
            >
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-gray-600">
            Don’t have an account?{' '}
            <span
              className="text-blue-600 font-medium underline cursor-pointer"
              onClick={() => router.push('/register')}
            >
              Sign up
            </span>
          </p>
        </div>

        <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-500 to-purple-600 justify-center items-center p-10">
          <img
            src="/Images/baneer1.jpg"
            alt="Banner"
            className="w-4/5 rounded-lg shadow-2xl object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/ADD8E6/000000?text=Image+Not+Found';
            }}
          />
        </div>
      </div>
    </div>
  );
}
