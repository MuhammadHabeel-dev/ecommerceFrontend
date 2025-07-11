'use client';

import { useState } from 'react';
// useRouter is commented out as it relies on Next.js routing which is not available here.
import { useRouter } from 'next/navigation';

// Base API URL for the backend (for CSRF cookie and API endpoints)
const API_BASE_URL = 'https://ecommerce.codiea.io';
const API_ENDPOINT_URL = `${API_BASE_URL}/api`;

// Define common headers for API requests (for JSON payloads)
const commonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Accept-Language': 'en',
};

// Helper function to get a cookie by name
function getCookie(name: string) {
  const cookie = document.cookie
    .split('; ')
    .find(row => row.startsWith(name + '='));
  return cookie ? decodeURIComponent(cookie.split('=')[1]) : null;
}

// Step 1: Send OTP API function
export const sendOtp = async (email: string) => {
  const res = await fetch(`${API_ENDPOINT_URL}/send-otp`, {
    method: 'POST',
    headers: commonHeaders,
    body: JSON.stringify({ email }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Failed to send OTP');
  return data;
};

// Step 2: Verify OTP API function
export const verifyOtp = async (email: string, otp: string) => {
  const res = await fetch(`${API_ENDPOINT_URL}/verify-otp`, {
    method: 'POST',
    headers: commonHeaders,
    body: JSON.stringify({ email, otp }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'OTP verification failed');
  return data;
};

// Step 3: Register User API function (with CSRF token handling)
export const registerUser = async (formData: FormData) => {
  try {
    // Get CSRF token from backend (Laravel Sanctum)
    await fetch(`${API_BASE_URL}/sanctum/csrf-cookie`, {
      credentials: 'include', // Important to send/receive cookies
    });

    // Get XSRF token from the cookie
    const xsrfToken = getCookie('XSRF-TOKEN');
    if (!xsrfToken) {
      throw new Error('XSRF-TOKEN cookie not found. CSRF token acquisition failed.');
    }

    // Submit registration with the XSRF token in the header
    const res = await fetch(`${API_ENDPOINT_URL}/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-Language': 'en',
        'X-XSRF-TOKEN': xsrfToken, // Include the XSRF token here
        // Do NOT set 'Content-Type': 'application/json' when sending FormData,
        // as the browser will automatically set 'Content-Type: multipart/form-data'
        // with the correct boundary.
      },
      credentials: 'include', // Important for sending session cookies
      body: formData,
    });

    const text = await res.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      console.error('Failed to parse JSON response:', text);
      throw new Error('Received invalid response from server.');
    }

    if (!res.ok) {
      // If response is not OK, throw an error with message from backend or default
      throw new Error(data.message || `Registration failed with status: ${res.status}`);
    }
    return data;
  } catch (error: any) {
    console.error('Registration API error:', error);
    throw error; // Re-throw the error for the component to handle
  }
};


export default function RegisterForm() {
  // State to manage the current step of the registration process
  const [step, setStep] = useState<'email' | 'otp' | 'register'>('email');
  // State for the email input
  const [email, setEmail] = useState('');
  // State for the OTP input
  const [otp, setOtp] = useState('');
  // State for the registration form data, including new fields
  const [form, setForm] = useState({
    name: '',
    phone_no: '', // New phone number field
    password: '',
    password_confirmation: '',
    role: 'user', // Default role
    // Seller-specific fields, initialized as empty
    store_name: '',
    logo: null as File | null, // For file input
    slug: '',
    description: '',
    address: '',
    country: '',
  });

  
  const router = useRouter();

  // State for displaying messages to the user (e.g., success, error)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  // State for loading indicator
  const [isLoading, setIsLoading] = useState(false);

  // Handle changes for generic form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  

  // Function to handle sending OTP to the provided email
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    setMessage(null); // Clear previous messages
    setIsLoading(true); // Set loading state
    try {
      await sendOtp(email); // Call the actual API to send OTP
      setMessage({ type: 'success', text: 'OTP sent to your email. Please check your inbox.' }); // Display success message
      setStep('otp'); // Move to the OTP verification step
    } catch (error: any) {
      // Handle API errors and display an error message
      setMessage({ type: 'error', text: error.message || 'Failed to send OTP. Please try again.' });
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  // Function to handle verifying the entered OTP
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    setMessage(null); // Clear previous messages
    setIsLoading(true); // Set loading state
    try {
      await verifyOtp(email, otp); // Call the actual API to verify OTP
      setMessage({ type: 'success', text: 'OTP verified successfully! Now complete your registration.' }); // Display success message
      setStep('register'); // Move to the final registration step
    } catch (error: any) {
      // Handle API errors and display an error message
      setMessage({ type: 'error', text: error.message || 'OTP verification failed. Please try again.' });
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  // Function to handle the final registration submission
  const handleFinalRegister = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    setMessage(null); // Clear previous messages
    setIsLoading(true); // Set loading state
    try {
      // Create FormData object to send registration details
      const formData = new FormData();
      formData.append('email', email);
      formData.append('otp', otp);
      formData.append('name', form.name);
      formData.append('password', form.password);
      formData.append('role', form.role); // Append selected role

      

      await registerUser(formData); // Call the actual API to register the user
      setMessage({ type: 'success', text: 'Registration successful! (Would redirect to login in a real app)' });
      // In a real Next.js app, uncomment the router.push line:
      router.push('/login');
      console.log(' Registration successful!  redirecting to /login.');
    } catch (error: any) {
      // Handle API errors and display an error message
      setMessage({ type: 'error', text: error.message || 'Registration failed. Please check your details.' });
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 px-4 py-8 font-inter">
      <div className="bg-white shadow-2xl shadow-blue-200 rounded-3xl flex flex-col w-full max-w-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.01] relative">
        {/* Loading overlay for the form section */}
        {isLoading && (
          <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center z-10 rounded-2xl">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            <p className="ml-4 text-blue-600 text-lg font-medium">Processing...</p>
          </div>
        )}

        <div className="p-8 sm:p-10 md:p-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center leading-tight">
            Register
          </h2>

          {/* Message display area */}
          {message && (
            <div
              className={`p-4 rounded-lg text-base font-medium mb-6 transition-all duration-300 ease-in-out ${
                message.type === 'success' ? 'bg-green-100 text-green-800 border border-green-300' : 'bg-red-100 text-red-800 border border-red-300'
              }`}
            >
              {message.text}
            </div>
          )}

          {/* Step 1: Enter Email */}
          {step === 'email' && (
            <form onSubmit={handleSendOtp} className="space-y-6">
              <div className="relative">
                <input
                  type="email"
                  placeholder=" "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="peer w-full border-b-2 border-gray-300 py-3 px-1 text-lg text-gray-800 placeholder-transparent focus:outline-none focus:border-blue-500 transition duration-200 bg-transparent"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-1 -top-4 text-gray-600 text-sm transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-blue-600 peer-focus:text-sm"
                >
                  Email Address
                </label>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-full py-4 rounded-lg text-xl font-bold tracking-wide shadow-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
                disabled={isLoading}
              >
                {isLoading ? 'Sending OTP...' : 'Send OTP'}
              </button>
            </form>
          )}

          {/* Step 2: Verify OTP */}
          {step === 'otp' && (
            <form onSubmit={handleVerifyOtp} className="space-y-6">
              <div className="relative mb-4">
                <input
                  type="email"
                  value={email}
                  readOnly
                  className="w-full border-b-2 border-gray-300 py-3 px-1 text-lg text-gray-600 bg-gray-50 cursor-not-allowed rounded-md"
                />
                <label
                  htmlFor="email-readonly"
                  className="absolute left-1 -top-4 text-gray-600 text-sm"
                >
                  Email Address
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder=" "
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="peer w-full border-b-2 border-gray-300 py-3 px-1 text-lg text-gray-800 placeholder-transparent focus:outline-none focus:border-green-500 transition duration-200 bg-transparent"
                  required
                  maxLength={6} // Assuming 6-digit OTP
                />
                <label
                  htmlFor="otp"
                  className="absolute left-1 -top-4 text-gray-600 text-sm transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-green-600 peer-focus:text-sm"
                >
                  Enter OTP (e.g., 123456)
                </label>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-green-600 to-teal-600 text-white w-full py-4 rounded-lg text-xl font-bold tracking-wide shadow-lg hover:from-green-700 hover:to-teal-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
                disabled={isLoading}
              >
                {isLoading ? 'Verifying OTP...' : 'Verify OTP'}
              </button>
            </form>
          )}

          {/* Step 3: Complete Registration */}
          {step === 'register' && (
            <form onSubmit={handleFinalRegister} className="space-y-6">
              {/* Full Name Field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder=" "
                  value={form.name}
                  onChange={handleChange}
                  className="peer w-full border-b-2 border-gray-300 py-3 px-1 text-lg text-gray-800 placeholder-transparent focus:outline-none focus:border-purple-500 transition duration-200 bg-transparent"
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-1 -top-4 text-gray-600 text-sm transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-purple-600 peer-focus:text-sm"
                >
                  Full Name
                </label>
              </div>

              
             
              {/* Password Field */}
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder=" "
                  value={form.password}
                  onChange={handleChange}
                  className="peer w-full border-b-2 border-gray-300 py-3 px-1 text-lg text-gray-800 placeholder-transparent focus:outline-none focus:border-purple-500 transition duration-200 bg-transparent"
                  required
                />
                <label
                  htmlFor="password"
                  className="absolute left-1 -top-4 text-gray-600 text-sm transition-all duration-200 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-purple-600 peer-focus:text-sm"
                >
                  Password
                </label>
              </div>

              

              {/* Role Selection */}
              <div className="relative">
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="peer w-full border-b-2 border-gray-300 py-3 px-1 text-lg text-gray-800 focus:outline-none focus:border-purple-500 transition duration-200 bg-transparent appearance-none"
                  required
                >
                  <option value="user">User</option>
                  <option value="seller">Seller</option>
                  <option value="admin">Admin</option>
                </select>
                <label
                  htmlFor="role"
                  className="absolute left-1 -top-4 text-gray-600 text-sm transition-all duration-200 peer-focus:-top-4 peer-focus:text-purple-600 peer-focus:text-sm"
                >
                  Register As
                </label>
                {/* Custom arrow for select dropdown */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 6.05 6.879 4.636 8.293z"/></svg>
                </div>
              </div>

              

              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white w-full py-4 rounded-lg text-xl font-bold tracking-wide shadow-lg hover:from-purple-700 hover:to-pink-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
                disabled={isLoading}
              >
                {isLoading ? 'Registering...' : 'Register'}
              </button>
            </form>
          )}

          <p className="text-center mt-8 text-base text-gray-600">
            Already have an account?{' '}
            <span
              className="underline cursor-pointer text-blue-600 hover:text-blue-800 font-semibold transition duration-200"
              onClick={() => router.push('/login')}  
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
