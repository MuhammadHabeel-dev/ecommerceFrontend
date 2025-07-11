'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Nav from './components/layout/nav';
import Header from './components/layout/header';
import BrowseByCategory from './components/layout/browseCategory';
import Banner from './components/layout/banner';

export default function HomePage() {
  const router = useRouter();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   console.log(token);
    
  //   if (!token) {
  //     router.replace('/login');
  //   }
  // }, []);

  return (
    <>
    
      <Nav/>
      <Header/>
      <Banner/>
      <BrowseByCategory/>
      <h1 className="text-2xl text-center">Welcome to the homepage</h1>
    
    </>
  );
}
