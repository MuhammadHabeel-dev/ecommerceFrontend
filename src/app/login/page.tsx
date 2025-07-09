
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from '@/app/components/forms/loginform';

export default function LoginPage() {
  const router = useRouter();

  

  return (
    <main className="flex min-h-screen justify-center items-center">
      <LoginForm/>
    </main>
  );
}
