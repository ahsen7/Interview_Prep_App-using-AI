import { isAuthenticated } from '@/lib/actions/auth.action'
import Link from 'next/link'
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'

const RootLayout = async ({ children }: { children: ReactNode }) => {

  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) redirect('/sign-in');

  return (
    <div className='root-layout'>
      <nav>
        <Link href='/' className='flex items-center gap-2' >
          {/* Add logo here */}
          <h2 className='text-primary-100'>MockView</h2>
        </Link>
      </nav>
      {children}
    </div>
  )
}

export default RootLayout