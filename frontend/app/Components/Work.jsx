import React from 'react'
import { MdWorkHistory } from 'react-icons/md';

export default function Work() {
  return (
      <div className='flex flex-col items-center py-6'>
        
      <h3 className='text-2xl md:text-3-xl text-center mt-10 py-4 my-3'>
              <span className='border-b-4 border-b-teal-600 py-2'>Experience</span>
      </h3>
      
      <div className='flex flex-col md:px-20 py-5 md:w-4/5 items-center justify-center'>
        <div className='flex items-center justify-center '>
          <MdWorkHistory className='w-20 h-20 text-teal-500'/>
        </div>
        <div className='text-md md:text-2xl text-center  md:text-left'>
            <li>Interned as a <span className='text-cyan-500'>Full Stack Web Developer</span> at <span className='text-cyan-500'>Varcons Technologies Pvt Ltd</span> for 1 month.</li>
          <li>Led <span className='text-cyan-500'>frontend team</span>, designed and developed web template, reducing Project workload by <span className='text-cyan-500'>10%</span>.</li>
            <li>Developed a client-oriented MERN Stack website, enhancing service visibility for businesses with <span className='text-cyan-500'>MongoDB</span>, <span className='text-cyan-500'>Express.js</span>, <span className='text-cyan-500'>Node.js</span>, and <span className='text-cyan-500'>React.js</span> .</li>
        </div>
      </div>
    </div>
  )
}
