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
        <div className='  py-6 flex justify-end max-w-7xl mx-auto'>
          {userContext.user ? <button className='text-secondary font-bold' onClick={signOut}>Sign Out</button> : <Link className='text-secondary font-bold' href={'/login'}>Sign In</Link>}
        </div>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between max-w-7xl mx-auto">

      </main>
    </>
  )
}
