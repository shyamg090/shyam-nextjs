import React from 'react'
import { FaCircle } from 'react-icons/fa';
import { AiOutlineAlipayCircle, AiFillSlackCircle, AiOutlineCodepenCircle, AiOutlineDribbbleSquare } from 'react-icons/ai'

import { BsFan, BsVirus, BsVirus2 } from 'react-icons/bs';

export default function Design() {
  return (
      <>
      <BsVirus2 className='fixed top-60 left-1/2 -z-10 opacity-5 md:opacity-10 w-full h-full text-teal-600 md:animate-spin-slow animate-spin-fast ' />
      <BsVirus2 className='fixed -top-60 -left-1/2 -z-10 opacity-10 md:opacity-10 w-full h-full text-teal-600 md:animate-spin-slow  animate-spin-fast  ' />
      <BsVirus2 className='fixed -top-80 right-1/2 -z-10 opacity-5 md:opacity-10 w-full h-full text-teal-600  md:animate-spin-slow  animate-spin-fast ' />
      <BsVirus2 className='fixed top-40 -right-1/2 -z-10 opacity-10 md:opacity-10 w-full h-full text-teal-600  md:animate-spin-slow  animate-spin-fast ' />    
      </>
  )
}
