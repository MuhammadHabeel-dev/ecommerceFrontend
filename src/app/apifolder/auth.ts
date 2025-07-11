const API_URL = 'https://ecommerce.codiea.io/api';

const commonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Accept-Language': 'en',
};

// Step 1: Send OTP
export const sendOtp = async (email: string) => {
  const res = await fetch(`${API_URL}/send-otp`, {
    method: 'POST',
    headers: commonHeaders,
    body: JSON.stringify({ email }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Failed to send OTP');
  return data;
};

// Step 2: Verify OTP
export const verifyOtp = async (email: string, otp: string) => {
  const res = await fetch(`${API_URL}/verify-otp`, {
    method: 'POST',
    headers: commonHeaders,
    body: JSON.stringify({ email, otp }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'OTP verification failed');
  return data;
};

// Step 3: Register User
export const registerUser = async (formData: FormData) => {
  const res = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-Language': 'en',
    },
    body: formData,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Registration failed');
  return data;
};


//Step For Login User

export interface LoginCredentials {
  email: string;
  password: string;
}

export async function loginUser(credentials: LoginCredentials) {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Login failed.');
  }

  return data;
}


// const API_URL = 'https://ecommerce.codiea.io'; // Your live backend domain

// function getCookie(name: string) {
//   const cookie = document.cookie
//     .split('; ')
//     .find(row => row.startsWith(name + '='));
//   return cookie ? decodeURIComponent(cookie.split('=')[1]) : null;
// }

// export const registerUser = async (formData: FormData) => {
//   try {
//     // Step 1: Get CSRF token
//     await fetch(`${API_URL}/sanctum/csrf-cookie`, {
//       credentials: 'include',
//     });

//     // Step 2: Get XSRF token from cookie
//     const xsrfToken = getCookie('XSRF-TOKEN');

//     // Step 3: Submit registration
//     const res = await fetch(`${API_URL}/api/register`, {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'X-XSRF-TOKEN': xsrfToken!,
//       },
//       credentials: 'include',
//       body: formData,
//     });
//     console.log(xsrfToken);

//     const text = await res.text();
//     console.log('Raw server response:', text);
//     const data = JSON.parse(text);
//     console.log(data);

//     if (!res.ok) throw new Error(data.message || 'Registration failed');
//     return data;
//   } catch (error) {
//     console.error('Registration error:', error);
//     throw error;
//   }
// };




// // logIn api

// export interface LoginCredentials {
//   email: string;
//   password: string;
// }

// export interface LoginResponse {
//   token: string;
//   user: {
//     id: number;
//     name: string;
//     email: string;
//     [key: string]: any; // Optional: to support extra fields
//   };
// }


// // loginUser.ts

// export async function loginUser({ email, password }: LoginCredentials): Promise<LoginResponse> {
//   try {
//     const res = await fetch('/api/auth/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     const text = await res.text();

//     let data: any;
//     try {
//       data = JSON.parse(text);
//     } catch {
//       throw new Error('Invalid JSON response from server.');
//     }

//     if (!res.ok) {
//       throw new Error(data.message || `Server error: ${res.status}`);
//     }

//     if (!data.token || !data.user) {
//       throw new Error('Incomplete login response from server.');
//     }

//     return {
//       token: data.token,
//       user: data.user,
//     };
//   } catch (error: any) {
//     throw new Error(error?.message || 'Something went wrong during login.');
//   }
// }

// // logout api
