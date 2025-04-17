"use client"
import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Image from 'next/image';
function Navbar() {
  return (
    <nav className='flex w-full justify-between px-4 py-3 md:py-4 md:px-20 bg-white'>
      <div className="left flex gap-4 items-center">
        <Image 
        src="/user.webp"
        className='rounded-[50%] h-[35px] w-[35px] md:h-[50px] md:w-[50px]'
        width={50} height={50} alt="logo" />
        <div>
          <h1 className='font-bold md:text-xl'>Welcom Back, Abhishek!</h1>
          <p className='text-sm'>Continue your learning journey</p>
        </div>
      </div>
      <div className="right flex gap-6">
        <NotificationsNoneIcon />
        <PermIdentityIcon />
      </div>
    </nav>
  )
}

export default Navbar