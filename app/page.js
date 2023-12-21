'use client'
import Link from 'next/link';

import { useUser } from './context/AuthContext';
import { signOut } from 'aws-amplify/auth';

export default function Home() {
  const user = useUser().user
  console.log('User :', user)
  return (
    <>
      <nav className='bg-black'>
        <div className=' px-12 py-6 flex justify-end max-w-7xl mx-auto mb-12'>
          {user ? <Link className='text-secondary font-bold mr-8' href={'/profile'}>Profile</Link> : ''}
          {user ? <button className='text-secondary font-bold' onClick={signOut}>Sign Out</button> : <Link className='text-secondary font-bold' href={'/login'}>Sign In</Link>}
        </div>
      </nav>
      <main className="px-12 flex min-h-full max-w-7xl mx-auto">
        <h1 className='text-black font-bold text-5xl'>{user ?`Hi, ${user.name}` : 'Welcome'}</h1>
      </main>
    </>
  )
}
