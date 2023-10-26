import React from 'react'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiLeetcode } from 'react-icons/si';
import { RiTwitterXFill } from 'react-icons/ri'
import { BiLogoGmail } from 'react-icons/bi'

export default function Links() {
  return (
      <div className='fixed z-30 top-1/4 left-0 p-1 md:p-3 shadow-sm shadow-teal-500 ' >
      <a href='https:github.com/shyamg090' target='_blank' ><AiFillGithub className='h-7 w-7 my-5 hover:text-teal-500 md:h-11 md:w-11' /></a>
      <a href='https://www.linkedin.com/in/shyam-g-6712a522b/' target='_blank'><AiFillLinkedin className='h-7 w-7 my-5 hover:text-teal-500 md:h-11 md:w-11 ' /></a>
      <a href='https://leetcode.com/Shyam090/' target='_blank'><SiLeetcode className='h-7 w-7 my-5 hover:text-teal-500 md:h-11 md:w-11' /></a>
      <a href='https://twitter.com/zoroDev0' target='_blank'><RiTwitterXFill className='h-7 w-7 my-5 hover:text-teal-500 md:h-11 md:w-11' /></a>
      <a href='mailto:shyamg1002@gmail.com' target='_blank'><BiLogoGmail className='h-7 w-7 my-5 hover:text-teal-500 md:h-11 md:w-11' /></a>  
    </div>
  )
}
