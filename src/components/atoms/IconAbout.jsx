import React from 'react'
import { MdLockOutline } from 'react-icons/md';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { IoMdPulse } from 'react-icons/io';

const IconAbout = () => {
  return (
    <div className='gap-2 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 justify-items-center place-items-center place-content-center'>
        <div className='text-white hover:text-yellow text-9xl flex justify-center'>
        <MdLockOutline/>
        </div>

        <div className='text-white hover:text-yellow text-9xl flex justify-center'>
            <AiOutlineClockCircle/>
        </div>

        <div className='text-white hover:text-yellow text-9xl flex justify-center'>
            <IoMdPulse/>
        </div>
    </div>
  )
}

export default IconAbout