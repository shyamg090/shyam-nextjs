"use client";

import { useState } from 'react';

// import Image from 'next/image'
// import { BsMoonStarsFill } from 'react-icons/bs';
// import { BiSolidBoltCircle } from 'react-icons/bi';

// import resume from './assets/Shyam_G_dev_25_10.pdf'

import Links from './Components/Links';
import Experince from './Components/Experince';
import Projects from './Components/Projects';
import Aboutme from './Components/Aboutme';
import FormPart from './Components/FormPart';
import Design from './Components/Design';
// import { FaCircle } from 'react-icons/fa';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import { Hero } from './Components/Hero';
import Work from './Components/Work';


export default function Home() {
  const [darkmode, setdarkmode] = useState(false);

  // console.log(darkmode);

  return (
    <div className={darkmode ? "dark" : ""} >
      <Design/>

      <main className="px-10 font-mono">
        <section className="min-h-screen">
          <Navbar />
          <Links />
          <Hero/>
        </section>
        <Aboutme />
        <Experince />
        <Work/>
        <Projects />
        <FormPart />
      </main>

      <Footer/>

    </div>
  )
}
