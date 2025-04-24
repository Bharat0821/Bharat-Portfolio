import React from 'react'

import avatarImg from "../Home/final-avatar.png"
import TextChanger from '../../TextChanger'

const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
        <div className='md:w-2/4 md:pt-10 '>
            <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'><TextChanger/></h1>
            <p className='text-xl md:md-2xl tracking-tight  '>I am a passionate web developer dedicated to building dynamic, user-friendly, and responsive websites. With expertise in frontend and backend development, I craft seamless digital experiences that blend creativity with functionality. Let's create something amazing together!</p>
           <button className='mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'><a href="mailto:swamibharat2110@gmail.com">Contact Me</a></button>
        </div>
        <div className='transition-all duration-1000'>
            <img className='max-w-md w-100 mr-10 hover:scale-110' src={avatarImg} alt="" />
        </div>
    </div>
   
  )
}

export default Home
