import { useState } from 'react'
import './App.css'
import Navbar from './assets/components/Navbar/Navbar'
import Home from './assets/components/Home/Home'
import About from './assets/components/About/About'
import Experience from './assets/components/Experience/Experience'
import Projects from './assets/components/Projects/Projects'
import Footer from './assets/components/Footer/Footer'

function App() {
  
  return (
    <>
    <div className='bg-[#171d32] h-auto w-full overflow-hidden '>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Footer/>
    </div>
    </>
  )
}

export default App
