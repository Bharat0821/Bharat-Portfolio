import React from 'react'
import aboutImg from "../../components/About/about-avatar.png"

const About = () => {
  return (
    <div id='About'className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity rounded-lg p-12'>
      <div>
        <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
        <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
          <img className='md:h-80' src={aboutImg} alt="About Image" />
          <ul>
            <div className='flex gap-3 py-4 '>
            
              <span className='w-95'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend developer</h1>
                <p className='text-sm md:text-md leading-tight'>I craft clean, responsive, and user-friendly interfaces using HTML, CSS, JavaScript, and frameworks like Bootstrap and React. I focus on delivering smooth user experiences with a strong eye for design and attention to detail across all devices.</p>
              </span>
            </div>
            <div className='flex gap-3 py-4 '>
            
              <span className='w-95'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend developer</h1>
                <p className='text-sm md:text-md leading-tight'>I build secure and scalable server-side logic using technologies like PHP and Node.js. I work with APIs, manage databases, and ensure seamless communication between the frontend and backend components of web applications.</p>
              </span>
            </div>
            <div className='flex gap-3 py-4 '>
           
              <span className='w-95'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>FullStack developer</h1>
                <p className='text-sm md:text-md leading-tight'>With expertise in both frontend and backend development, I develop complete web applications—from design to deployment. I’m comfortable handling everything from UI creation to database management, using tools like React, PHP, and MySQL to bring ideas to life efficiently.

</p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
