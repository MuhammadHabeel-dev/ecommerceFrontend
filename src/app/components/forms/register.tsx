'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { sendOtp, verifyOtp, registerUser } from '@/app/apifolder/auth';

export default function RegisterForm() {
  const [step, setStep] = useState<'email' | 'otp' | 'register'>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [form, setForm] = useState({
    name: '',
    password: '',
    password_confirmation: '',
  });

  const router = useRouter();

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendOtp(email);
      alert('OTP sent to your email');
      setStep('otp');
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await verifyOtp(email, otp);
      alert('OTP verified');
      setStep('register');
    } catch (error: any) {
      alert(error.message);
    }
  };

  const handleFinalRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('otp', otp);
      formData.append('name', form.name);
      formData.append('password', form.password);
      formData.append('password_confirmation', form.password_confirmation);
      formData.append('role', 'user'); // Default role

      await registerUser(formData);
      alert('Registration successful!');
      router.push('/login');
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded mt-10 space-y-6">
      {step === 'email' && (
        <form onSubmit={handleSendOtp}>
          <h2 className="text-xl font-bold mb-4">Step 1: Enter Your Email</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full border p-2 rounded mb-4"
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
            Send OTP
          </button>
        </form>
      )}

      {step === 'otp' && (
        <form onSubmit={handleVerifyOtp}>
          <h2 className="text-xl font-bold mb-4">Step 2: Verify OTP</h2>
          <input
            type="email"
            value={email}
            readOnly
            className="w-full border p-2 rounded mb-2 bg-gray-100"
          />
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={e => setOtp(e.target.value)}
            className="w-full border p-2 rounded mb-4"
            required
          />
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">
            Verify OTP
          </button>
        </form>
      )}

      {step === 'register' && (
        <form onSubmit={handleFinalRegister}>
          <h2 className="text-xl font-bold mb-4">Step 3: Complete Registration</h2>
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className="w-full border p-2 rounded mb-3"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            className="w-full border p-2 rounded mb-3"
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={form.password_confirmation}
            onChange={e => setForm({ ...form, password_confirmation: e.target.value })}
            className="w-full border p-2 rounded mb-4"
            required
          />
          <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded">
            Register
          </button>
        </form>
      )}
    </div>
  );
}
