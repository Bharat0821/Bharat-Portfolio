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
                <p className='text-sm md:text-md leading-tight'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur quo similique magni voluptatibus repudiandae itaque, cupiditate obcaecati dolor earum ipsum expedita labore perferendis!</p>
              </span>
            </div>
            <div className='flex gap-3 py-4 '>
            
              <span className='w-95'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend developer</h1>
                <p className='text-sm md:text-md leading-tight'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur quo similique magni voluptatibus repudiandae itaque, cupiditate obcaecati dolor earum ipsum expedita labore perferendis!</p>
              </span>
            </div>
            <div className='flex gap-3 py-4 '>
           
              <span className='w-95'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>DataBase developer</h1>
                <p className='text-sm md:text-md leading-tight'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur quo similique magni voluptatibus repudiandae itaque, cupiditate obcaecati dolor earum ipsum expedita labore perferendis!</p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
