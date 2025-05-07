'use client'
 

import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from './AuthContext'
 
export default function User() {
  const session = useAuth()
 
  return (
    <li>
      {session?.user?.image ? (
        <Link
          href='/account'
          className='hover:text-accent-400 transition-colors flex items-center gap-4'>
          <Image
            width={40}
            height={40}
            src={session.user.image}
            alt={session.user.name}
            className='h-8 rounded-full'
            referrerPolicy='no-referrer'
          />
          <span>Guest area</span>
        </Link>
      ) : (
        <Link
          href='/account'
          className='hover:text-accent-400 transition-colors'>
          Guest area
        </Link>
      )}
    </li>
  )
}