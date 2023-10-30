import React from 'react'

import { ImHtmlFive, ImCss3 } from 'react-icons/im';
import { SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, SiGit, SiPostman } from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';

export default function Experince() {

    const mytech = [
        {
            id: 1,
            Image: ImHtmlFive,
            name: "HTML",
            color: "text-orange-500"
        },
        {
            id: 2,
            Image: ImCss3,
            name: "CSS",
            color: "text-blue-500"
        }, {
            id: 3,
            Image: SiJavascript,
            name: "JavaScript",
            color: "text-yellow-500"
        }, {
            id: 4,
            Image: SiReact,
            name: "React.js",
            color: "text-blue-600"
        }, {
            id: 5,
            Image: SiNextdotjs,
            name: "Next.js",
            color: "text-white"
        }, {
            id: 6,
            Image: SiNodedotjs,
            name: "Node.js",
            color: "text-green-400"
        }, {
            id: 7,
            Image: SiExpress,
            name: "Express.js",
            color: "text-white"
        }, {
            id: 8,
            Image: SiMongodb,
            name: "MongoDB",
            color: "text-green-500"
        },
        {
            id: 9,
            Image: SiTailwindcss,
            name: "TailwindCSS",
            color: "text-sky-400"
        },
        {
            id: 10,
            Image: TbBrandCpp,
            name: "C++",
            color: "text-sky-400"
        },
        {
            id: 11,
            Image: SiGit,
            name: "Git",
            color: "text-orange-500"
        },
        {
            id: 12,
            Image: SiPostman,
            name: "Postman",
            color: "text-orange-600"
        },
    ]


  return (
      <div className='my-6'>
          <h3 className='text-2xl md:text-3-xl text-center py-4 '>
              <span className='border-b-4 border-b-teal-600 py-2'>My Tech Stack</span>
          </h3>
          <div className='w-full grid grid-cols-2 md:grid-cols-3 my-10'>
              {
                  mytech.map(({id , Image, name, color}) => {
                      return (
                          <div key={id} className='flex flex-col items-center justify-center py-2'>
                              <Image className={`${color} h-16 w-16 animate-bounce-short `  }  alt='skills' />
                              <h4 className='text-md md:text-2xl py-3' >{name}</h4>
                          </div>
                      )
                  })
              }
          </div>
      </div>
  )
}
