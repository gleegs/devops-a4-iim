import { Inter } from 'next/font/google'
import './globals.css'
import { Amplify } from 'aws-amplify';
import config from '/src/aws-exports.js';
import AuthContext from './context/AuthContext';
Amplify.configure({...config, ssr: true});

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ' min-h-screen'}>
        <AuthContext>
          {children}
        </AuthContext>
      </body>
    </html>
  )
}