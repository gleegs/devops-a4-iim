'use client'
import Link from 'next/link';

import { Amplify } from 'aws-amplify';
import config from '/src/aws-exports.js';
import { useUser } from './context/AuthContext';
import { signOut } from 'aws-amplify/auth';
Amplify.configure(config);



export default function Home() {
  const userContext = useUser()
  console.log('User :', userContext.user)
  // handleRegister({email:'m axime.baron@test.com', password:'testtest', firstname:'Maxime', lastname:'Baron'})
  return (
    <>
      <nav className='bg-black'>
        <div className=' px-12 py-6 flex justify-end max-w-7xl mx-auto mb-12'>
          {userContext.user ? <button className='text-secondary font-bold' onClick={signOut}>Sign Out</button> : <Link className='text-secondary font-bold' href={'/login'}>Sign In</Link>}
        </div>
      </nav>
      <main className="px-12 flex min-h-screen max-w-7xl mx-auto">
        <h1 className='text-black font-bold text-5xl'>Hi, {'{user_name}'}</h1>
      </main>
    </>
  )
}
