'use client';
import React from 'react';
import {
  CreditCard,
  MapPin,
  Heart,
  ShoppingBag,
  LogOut,
  Settings,
  User as UserIcon,
} from 'lucide-react';

const User = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 bg-white shadow-md p-6">
        <h2 className="text-2xl font-bold mb-8">My Account</h2>
        <nav className="flex flex-col gap-5 text-gray-700 font-medium">
          <button className="flex items-center gap-3 hover:text-blue-600 transition">
            <UserIcon size={20} />
            <span>Dashboard</span>
          </button>
          <button className="flex items-center gap-3 hover:text-blue-600 transition">
            <ShoppingBag size={20} />
            <span>My Orders</span>
          </button>
          <button className="flex items-center gap-3 hover:text-blue-600 transition">
            <CreditCard size={20} />
            <span>Saved Cards</span>
          </button>
          <button className="flex items-center gap-3 hover:text-blue-600 transition">
            <MapPin size={20} />
            <span>Addresses</span>
          </button>
          <button className="flex items-center gap-3 hover:text-blue-600 transition">
            <Heart size={20} />
            <span>Wishlist</span>
          </button>
          <button className="flex items-center gap-3 hover:text-blue-600 transition">
            <Settings size={20} />
            <span>Settings</span>
          </button>
          <button className="flex items-center gap-3 text-red-500 hover:text-red-700 transition">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="w-full lg:w-3/4 p-6 space-y-6">
        <section className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold mb-2">Welcome Back, User 👋</h2>
          <p className="text-gray-600">Here’s a quick look at your account activity.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Total Orders</h3>
            <p className="text-2xl font-bold text-blue-600">22</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Wishlist Items</h3>
            <p className="text-2xl font-bold text-blue-600">5</p>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Saved Cards</h3>
            <button className="text-blue-600 font-medium hover:underline">Add Card</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-100 p-4 rounded-lg shadow flex flex-col justify-between">
              <div className="flex justify-between">
                <h4 className="text-lg font-bold">Visa</h4>
                <span className="text-sm text-gray-600">Credit</span>
              </div>
              <p className="text-xl font-mono">**** **** **** 1234</p>
              <div className="flex justify-between text-sm text-gray-700">
                <span>Expiry: 12/25</span>
                <CreditCard size={18} />
              </div>
            </div>

            <div className="bg-blue-100 p-4 rounded-lg shadow flex flex-col justify-between">
              <div className="flex justify-between">
                <h4 className="text-lg font-bold">Mastercard</h4>
                <span className="text-sm text-gray-600">Debit</span>
              </div>
              <p className="text-xl font-mono">**** **** **** 5678</p>
              <div className="flex justify-between text-sm text-gray-700">
                <span>Expiry: 03/27</span>
                <CreditCard size={18} />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Addresses</h3>
            <button className="text-blue-600 font-medium hover:underline">Add Address</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <h4 className="font-semibold text-lg mb-1">John Doe</h4>
              <p className="text-sm text-gray-700">123 Main Street, City, Country</p>
              <p className="text-sm text-gray-700">Phone: +1 234 567 890</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default User;
