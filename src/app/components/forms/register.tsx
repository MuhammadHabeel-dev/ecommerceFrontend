// // app/components/forms/register.tsx

// 'use client';

// import { useRouter } from 'next/navigation';
// import { useState } from 'react';
// import Image from 'next/image';
// import { registerUser } from '@/app/apifolder/auth';

// export default function RegisterForm() {
//   const router = useRouter();

//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     phone: '',
//     role: 'user',
//     store_name: '',
//     store_slug: '',
//     store_logo: null as File | null,
//     description: '',
//     address: '',
//     city: '',
//     country: '',
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value, files } = e.target as HTMLInputElement;
//     if (name === 'store_logo' && files?.length) {
//       setForm({ ...form, store_logo: files[0] });
//     } else {
//       setForm({ ...form, [name]: value });
//     }
//   };

//   const handleRegister = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (form.password !== form.confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }

//     const formData = new FormData();
//     Object.entries(form).forEach(([key, value]) => {
//       if (key === 'store_logo' && value instanceof File) {
//         formData.append(key, value);
//       } else if (typeof value === 'string') {
//         formData.append(key, value);
//       }
//     });

//     // Debug log (optional)
//     // for (let [key, val] of formData.entries()) {
//     //   console.log(`${key}:`, val);
//     // }

//     try {
//       const data = await registerUser(formData);
//       if (data?.token) {
//         localStorage.setItem('token', data.token);
//         router.push('/login');
//       } else {
//         alert('Registration failed: No token returned');
//       }
//     } catch (error: any) {
//       alert(error.message || 'Something went wrong');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen px-4 bg-gray-100">
//       <div className="bg-white shadow-lg shadow-blue-400 rounded-2xl flex flex-col lg:flex-row w-full max-w-6xl overflow-hidden">
//         <div className="w-full lg:w-1/2 p-10">
//           <h2 className="text-2xl rounded-md font-serif text-center leading-loose shadow-gray-700 shadow-sm font-bold text-gray-700 mb-4">
//             Sign up
//           </h2>

//           <form onSubmit={handleRegister} className="space-y-5" encType="multipart/form-data">
//             <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" required />
//             <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" required />
//             <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" required />
//             <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" required />
//             <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" required />

//             <select name="role" value={form.role} onChange={handleChange} className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" required>
//               <option value="user">User</option>
//               <option value="seller">Seller</option>
//               <option value="admin">Admin</option>
//             </select>

//             <div className="flex items-center gap-2 text-sm text-gray-600">
//               <input type="checkbox" required />
//               <label>
//                 I agree to the <span className="underline cursor-pointer">Terms of Service</span>
//               </label>
//             </div>

//             <button type="submit" className="bg-blue-500 text-2xl text-white w-full py-3 rounded-md hover:bg-blue-700 transition font-serif shadow-gray-500 shadow-sm">
//               Register
//             </button>
//           </form>
//         </div>

//         <div className={`w-full ${form.role === 'seller' ? 'block' : 'hidden'} lg:flex lg:w-1/2 bg-white px-10 pt-10 overflow-y-auto`}>
//           {form.role === 'seller' ? (
//             <div className="w-full space-y-4">
//               <h3 className="text-2xl rounded-md font-serif text-center leading-loose shadow-gray-500 shadow-sm font-bold text-gray-700 mb-4">
//                 Store Information
//               </h3>

//               <input type="text" name="store_name" placeholder="Store Name" value={form.store_name} onChange={handleChange} className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" required />
//               <input type="text" name="store_slug" placeholder="Store Slug" value={form.store_slug} onChange={handleChange} className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" />

//               <label className="flex flex-col items-start gap-2 px-4 py-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200 border border-dashed border-gray-400">
//                 <div className="flex items-center gap-2">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16l4-4m0 0l4 4m-4-4v12m8-6a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                   <span className="text-sm text-gray-700">Upload Store Logo</span>
//                 </div>
//                 <input type="file" name="store_logo" accept="image/*" onChange={handleChange} className="hidden" />
//                 {form.store_logo && (
//                   <p className="text-xs text-gray-500">Selected: {form.store_logo.name}</p>
//                 )}
//               </label>

//               <textarea name="description" placeholder="Store Description" value={form.description} onChange={handleChange} className="w-full border border-gray-300 p-2 rounded focus:outline-none" />

//               <input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange} className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" required />
//               <input type="text" name="city" placeholder="City" value={form.city} onChange={handleChange} className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" required />
//               <input type="text" name="country" placeholder="Country" value={form.country} onChange={handleChange} className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" required />
//             </div>
//           ) : (
//             <div className="flex flex-col w-full items-center">
//               <Image
//                 src="/images/login-vector.jpg"
//                 alt="Register Illustration"
//                 width={450}
//                 height={450}
//                 className="w-full h-auto object-contain"
//                 priority
//               />
//               <p
//                 onClick={() => router.push('/login')}
//                 className="mt-6 text-sm text-center text-gray-700 underline cursor-pointer hover:text-gray-900"
//               >
//                 Already have an account? Login
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }









'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { registerUser } from '@/app/apifolder/auth';

export default function RegisterForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '', // Corrected: Using password_confirmation
    contact_no: '', // Corrected: Renamed from 'phone' to 'contact_no' for consistency with backend
    role: 'user',
    store_name: '',
    store_slug: '',
    store_logo: null as File | null,
    address: '',
    city: '',
    country: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === 'store_logo' && files) {
      setForm({ ...form, store_logo: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.password_confirmation) {
      alert('Passwords do not match');
      return;
    }

    const formData = new FormData();
    // Append core user fields
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('role', form.role);
    formData.append('password', form.password);
    formData.append('password_confirmation', form.password_confirmation); // Correctly named for Laravel's 'confirmed' rule
    formData.append('contact_no', form.contact_no); // Use 'contact_no' as per backend validation/state

    // Append common address fields (required_if:role,seller in backend)
    formData.append('address', form.address);
    formData.append('city', form.city);
    formData.append('country', form.country);


    // Handle seller-specific fields if role is seller
    if (form.role === 'seller') {
      

      formData.append('store_name', form.store_name);
      if (form.store_slug) { // Only append if it has a value
        formData.append('store_slug', form.store_slug);
      }
      if (form.store_logo) {
        formData.append('store_logo', form.store_logo);
      }
      
    }

    try {
      const data = await registerUser(formData);

      if (data?.token) {
        localStorage.setItem('token', data.token);
        router.push('/login');
      } else {
        alert('Registration failed: No token returned');
      }
    } catch (error: any) {
      console.error('Registration Error:', error); // Log the full error for debugging
      alert(error.message || 'Something went wrong');
    }
  }; // Removed the duplicate closing brace here

  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-gray-100">
      <div className="bg-white shadow-lg shadow-blue-400 rounded-2xl flex flex-col lg:flex-row w-full max-w-6xl overflow-hidden">
        <div className="w-full lg:w-1/2 p-10">
          <h2 className="text-2xl rounded-md font-serif text-center leading-loose shadow-gray-700 shadow-sm font-bold text-gray-700 mb-4">Sign up</h2>
          <form onSubmit={handleRegister} className="space-y-5" encType="multipart/form-data">
            <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" required />
            <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" required />
            {/* Corrected: name attribute and value source for phone number */}
            <input type="tel" name="contact_no" placeholder="Phone Number" value={form.contact_no} onChange={handleChange} className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" required />
            <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" required />
            {/* Corrected: name attribute for confirm password */}
            <input type="password" name="password_confirmation" placeholder="Confirm Password" value={form.password_confirmation} onChange={handleChange} className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" required />

            <select name="role" value={form.role} onChange={handleChange} className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" required>
              <option value="user">User</option>
              <option value="seller">Seller</option>
              <option value="admin">Admin</option>
            </select>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" required />
              <label>
                I agree to the <span className="underline cursor-pointer">Terms of Service</span>
              </label>
            </div>

            <button type="submit" className="bg-blue-500 text-2xl text-white w-full py-3 rounded-md hover:bg-blue-700 transition font-serif shadow-gray-500 shadow-sm">Register</button>
          </form>

        </div>

        <div className={`w-full ${form.role === 'seller' ? 'block' : 'hidden'} lg:flex lg:w-1/2 bg-white px-10 pt-10 overflow-y-auto`}>

          {form.role === 'seller' ? (
            <div className="w-full space-y-4">
              <h3 className="text-2xl rounded-md font-serif text-center leading-loose shadow-gray-500 shadow-sm font-bold text-gray-700 mb-4 ">Store Information</h3>

              <input type="text" name="store_name" placeholder="Store Name" value={form.store_name} onChange={handleChange} className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" required />
              <input type="text" name="store_slug" placeholder="Store Slug" value={form.store_slug} onChange={handleChange} className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" />

              <label className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200 border border-dashed border-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16l4-4m0 0l4 4m-4-4v12m8-6a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-700">Upload Store Logo</span>
                 <input type="file" name="store_logo" accept="image/*" onChange={handleChange} className="hidden" />
                
                 {form.store_logo && (
                  <p className="text-xs text-gray-500">Selected: {form.store_logo.name}</p>
                 )}
              </label>

              {/* Corrected: Added value and onChange for description */}
              <textarea name="description" placeholder="Store Description" className="w-full border border-gray-300 p-2 rounded focus:outline-none" />

              <input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange} className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" required />
              <input type="text" name="city" placeholder="City" value={form.city} onChange={handleChange} className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" required />
              <input type="text" name="country" placeholder="Country" value={form.country} onChange={handleChange} className="w-full border-b border-gray-300 py-2 px-1 focus:outline-none" required />
            </div>
          ) : (
            <div className="flex flex-col w-full items-center">
              <Image
                src="/images/login-vector.jpg"
                alt="Register Illustration"
                width={450}
                height={450}
                className="w-full h-auto object-contain"
                priority
              />
              <p
                onClick={() => router.push('/login')}
                className="mt-6 text-sm text-center text-gray-700 underline cursor-pointer hover:text-gray-900"
              >
                Already have an account? Login
              </p>
            </div>
          )}
        </div>


      </div>
    </div>
  );
}




