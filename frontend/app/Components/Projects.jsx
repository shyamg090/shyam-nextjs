import React from 'react'

import Image from 'next/image'

import techtune from '../assets/techtune.png';
import moodmovie from '../assets/moodmovie.png';
import pokedex from '../assets/pokedex.png';
import todo from '../assets/todo.png';

import { HiLink } from 'react-icons/hi';
import { PiGithubLogoFill } from 'react-icons/pi'

export default function Projects() {
  const myProject = [
    {
      id: 1,
      image: techtune,
      name: "TechTune Motors",
      desc: "During my internship, I developed a dynamic MERN Stack website for Techtune Motors. The site highlights their services, prices, and features a user-friendly form for requesting callbacks. It efficiently showcases the company's offerings, ensuring a seamless user experience for visitors seeking information and assistance.",
      skills : ["React.js", "MongoDB", "Express.js", "Node.js", "TailwindCSS"],
      link: "https://techtunemotors.netlify.app/",
      github: "https://github.com/shyamg090/TechTuneMotors"
    },
    {
      id: 2,
      image: moodmovie,
      name: "MoodMovies",
      desc: "Explore the cinematic world effortlessly with our platform, featuring top trending movies and TV shows, along with top IMDB rated shows. Discover detailed descriptions of films and shows, delve into the cast and crew information, and personalize your movie journey. Stay updated with the latest trends and enjoy a seamless entertainment experience.",
      skills: ["React.js", "SCSS", "JavaScript","TMDB API"],
      link: "https://moodmovie.netlify.app/",
      github: "https://github.com/shyamg090/MoodFlix"
    }, {
      id: 3,
      image: todo,
      name: "Todo App",
      desc: "Efficient task storage app crafted for seamless task management",
      skills: ["React.js", "SCSS", "JavaScript"],
      link: "https://todo-by-shyam.netlify.app/",
      github: "https://github.com/shyamg090/todo-react/"
    }, {
      id: 4,
      image: pokedex,
      name: "Pokedex",
      skills: ["React.js", "SCSS", "JavaScript", "Poke API"],
      desc: "Pokedex: React-based app showcases 1218 Pokémon with detailed info",
      link: "https://pokedex-by-shyam.netlify.app/",
      github: "https://github.com/shyamg090/Pokedex-React-project"
    },
  ]

  return (
    <div className='my-6'>
      <h3 className='text-2xl md:text-3-xl text-center mt-10 py-4 '>
        <span className='border-b-4 border-b-teal-600 py-2'>My Projects</span> 
      </h3>
      {/* <div className='grid grid-col-1 md:grid-cols-2 flex-col  md:m-10 ' > */}
        {
          myProject.map(({ id, image, name, desc, link, github,skills }) => {
            return (
              <div key={id} className=' flex flex-col md:grid md:grid-cols-2 my-5 md:mx-20 shadow-md shadow-teal-300 rounded-lg  md:transition ease-in-out delay-150 mg:hover:-translate-y-1 duration-300 md:hover:shadow-green-400 ' >
                <div className='flex flex-col items-center justify-center'>
                  <h2 className='text-2xl p-3' >{name}</h2>
                  <Image src={image} alt="project"
                    className="rounded-lg w-inherit h-inherit p-1 md:p-2"
                  />
                </div>
                <div className='flex flex-col items-center justify-around' >
                  <p className='p-3 text-md md:text-xl' >{desc}</p>
                  <div className='w-full p-3 flex items-center justify-evenly flex-wrap' >
                    {
                      skills.map((item) => {
                        return <h3 className='m-2' key={id*2} ><span className='p-1 bg-cyan-700 rounded-lg text-white' >{item}</span></h3>
                      })
                    }
                  </div>
                  <div className='flex items-center justify-evenly m-4 p-1 w-inherit' >
                    <a href={link} ><HiLink className='w-8 h-8 hover:text-teal-600 mx-10' /></a>
                    <a href={github}><PiGithubLogoFill className='w-8 h-8 hover:text-teal-600 mx-10' /></a>
                  </div>
                </div>
              </div>
            )
          })}
      {/* </div> */}
      
    </div>
  )
}
