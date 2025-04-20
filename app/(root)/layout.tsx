import Link from 'next/link'
import React, { ReactNode } from 'react'

const RootLayout = ({children}: { children: ReactNode }) => {
  return (
    <div className='root-layout'>
      <nav>
        <Link href='/' className='flex items-center gap-2' />
        {/* Add logo here */}
        <h2 className='text-primary-100'>MockView</h2>
      </nav>
      {children}
      </div>
  )
}

export default RootLayout