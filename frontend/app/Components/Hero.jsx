import React from 'react'
import Image from 'next/image'
import shyamg from '../assets/shyamg.png';

export const Hero = () => {
  return (
      <>
          <div className='text-center text-lg'>
              <h2 className='text-4xl md:text-5xl text-teal-500 py-2'>Shyam G </h2>
              <h3 className='text-md md:text-xl py-2 mx-5'>
                  MERN Stack Developer and C++ Programmer.
              </h3>
              <p className='text-md md:text-xl py-5 mx-3 leading-8'>
                  Final year B.E student persuing Information Science and Engineering.
              </p>
          </div>
          <div className='relative flex justify-center items-center' >
              <Image src={shyamg} alt='mypic' className='w-72 h-72 bg-gradient-to-b from-teal-400 rounded-full' />
          </div>
      </>
  )
}
