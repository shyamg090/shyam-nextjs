import React from 'react'

export default function Aboutme() {
  return (
      <div>
          <h3 className='text-2xl md:text-3-xl text-center mt-10 py-4 '>
              <span className='border-b-4 border-b-teal-600 py-2'>About Me</span>
          </h3>
          <p className='text-md md:text-2xl text-gray-200 text-center px-4 md:px-20 py-5'>
              Started web development in 2022. Built numerous websites for
              <span className='text-cyan-500'> real-world experience</span>. Daily learning fuels my expertise in
              <span className='text-cyan-500'> MERN stack</span>, with a focus on innovative and confident frontend development.
              I'm also into problem solving and solved over <span className='text-cyan-500'> 100+ Leetcode Problems</span> and <span className='text-cyan-500'> 60+ CodeStudio Problems</span>.
          </p>
      </div>
  )
}
