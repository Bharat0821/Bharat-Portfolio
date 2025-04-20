import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState } from 'react'


const Navbar = () => {
    const [menu,openMenu] = useState(false);
    const [showMenu,setShowMenu] = useState(true);
  return (
    <nav className='fixed w-full top-0 flex flex-wrap bg-[#171d32]  items-center justify-between md:item-center  text-amber-50 px-10 pt-6 md:px-20 '>
        <span className='text-2xl font-bold tracking-wide'>Portfolio</span>

      <ul className={` ${ menu ? "block":"hidden"}  mx-24 py-2 mt-4 font-semibold md:mt-5 px-4 rounded-xl bg-opacity-30 md:border-none text-centermd:bg-transparent md:static  md:mx-0  md:flex gap-6`}>
        <a href="#About">
        <li className='text-md transition-all duration-300 p-1 md:p-0 '>About</li>
        </a>
        <a href="#Experience">
        <li className='text-md transition-all duration-300 p-1 md:p-0'>Education</li>
        </a>
        <a href="#Projects">
        <li className='text-md transition-all duration-300 p-1 md:p-0'>Projects</li>
        </a>
        <a href="#Footer">
        <li className='text-md transition-all duration-300 p-1 md:p-0'>Contact</li>
        </a>
       
      </ul>
      { showMenu ? (
        <RiMenu2Line size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300" 
        onClick ={()=>{openMenu(!menu); setShowMenu(!showMenu); }}/>
      ): <RiCloseLine size={30} className='md:hidden absolute right-10 top-6 transition-all duration-300'
      onClick={()=>{ openMenu(!menu); setShowMenu(!showMenu)}}/>}
    </nav>
  )
}

export default Navbar
