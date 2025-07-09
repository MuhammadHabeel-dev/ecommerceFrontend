'use client';
import { useEffect, useState } from 'react';

const Nav = () => {
  const [user, setUser] = useState<{ name: string; role: string } | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  return (
    <div className="w-full h-auto bg-[var(--color-silver)] border border-gray-400 px-4 py-2 text-sm md:text-base">
      <div className="flex justify-between items-center flex-wrap gap-y-2">
        <ul className="flex space-x-4">
          <li className="pr-4 border-r border-gray-400">About Us</li>
          <li className="pr-4 border-r border-gray-400">Wishlist</li>
          <li>Order Tracking</li>
        </ul>

        {user ? (
          <ul className="flex space-x-4 items-center">
            <li className="pr-4 border-r border-gray-400 text-blue-600 font-medium">
              Welcome, {user.name}
            </li>
            <li className="pr-4 border-r border-gray-400">
              <a
                href={user.role === 'seller' ? '/seller-dashboard' : '/user-dashboard'}
                className="hover:text-blue-600"
              >
                Dashboard
              </a>
            </li>
            <li>
              <button onClick={handleLogout} className="hover:text-red-600">
                Logout
              </button>
            </li>
          </ul>
        ) : (
          <ul className="flex space-x-4">
            <li className="pr-4 border-r border-gray-400">
              <a href="/login" className="hover:text-blue-600">Login</a>
            </li>
            <li>
              <a href="/register" className="hover:text-blue-600">Register</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Nav;
