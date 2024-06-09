import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import './App.css'
import Marquee from './components/Marquee'
import About from './components/About'
import Footer from './components/Footer'


function App() {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <Landing/>
      <About/>
      <Marquee/>
      <Footer/>
    </div>
  )
}

export default App
