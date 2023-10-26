import React from 'react'
import { FaCircle } from 'react-icons/fa';
import { AiOutlineAlipayCircle, AiFillSlackCircle, AiOutlineCodepenCircle, AiOutlineDribbbleSquare } from 'react-icons/ai'

import { BsFan, BsVirus, BsVirus2 } from 'react-icons/bs';

export default function Design() {
  return (
      <>
      <BsVirus className='fixed top-60 left-1/2 -z-10 opacity-5 md:opacity-10 w-full h-full text-teal-700' />
      <BsVirus className='fixed -top-60 -left-1/2 -z-10 opacity-5 md:opacity-10 w-full h-full text-teal-500' />
      <BsVirus className='fixed -top-80 right-1/2 -z-10 opacity-5 md:opacity-10 w-full h-full text-teal-700' />
      <BsVirus className='fixed top-40 -right-1/2 -z-10 opacity-5 md:opacity-10 w-full h-full text-teal-500' />    
      </>
  )
}
