import React from 'react'

export const Navbar = () => {
  return (
      <nav className='py-10 mb-12 flex justify-between' >
          <h1 className='text-xl'>SamDev</h1>
          <ul className='flex items-center'>
              {/* <li>
                <BsMoonStarsFill className='w-8 h-8 mx-3 cursor-pointer'
                  onClick={() => setdarkmode(!darkmode)} />
              </li> */}
              <li>
                  <a className='bg-gradient-to-r from-cyan-300 to-teal-500 p-3 ml-3 rounded-lg '
                      href='/Shyam_G_dev_25_10.pdf' target='_blank' download={true} rel="noreferrer"
                  >
                      Resume</a>
              </li>
          </ul>
      </nav>
  )
}
