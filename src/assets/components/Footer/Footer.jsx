import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div id='Footer'className='flex justify-around bg-[#465971] text-white p-10 md:p-12 items-center'>
        <div>
            <h1 className='text-2xl md:text-6xl font-bold '>Contact</h1>
            <h3 className='text-sm md:text-2xl font-normal'>Feel Free To Reach Out!</h3>
        </div>
        <ul className='text-sm md:text-xl gap-4 '>
        <a href="mailto:swamibharat2110@gmail.com"> <li className='flex gap-2 items-center'><MdOutlineEmail size={20}/>swamibharat2110@gmail.com</li></a>
         <a href="https://www.linkedin.com/in/bharat-swami-959471285/"><li className='flex gap-2  items-center'><CiLinkedin size={20}/>linklin.com/bharat-swami-959471285</li></a> 
            <li className='flex gap-2  items-center'><FaGithub size={20}/>github.com/Bharat0821</li>
        </ul>
    </div>
  )
}

export default Footer
