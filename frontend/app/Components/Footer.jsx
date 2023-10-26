import React from 'react'
import { AiOutlineCopyrightCircle, AiFillRocket, AiTwotoneThunderbolt } from 'react-icons/ai';

export const Footer = () => {
  return (
      <footer className='flex flex-col items-center justify-center h-20 mt-10 w-full bg-teal-500' >
          <h1>Developed By Shyam</h1>
          <h2 className='flex items-center' ><AiOutlineCopyrightCircle />2023</h2>
      </footer>
  )
}
