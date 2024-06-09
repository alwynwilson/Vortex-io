import React from 'react'
function Navbar() {
  return (
    <div className="fixed z-[999] w-full px-20 py-8 font-['Neue_Montreal'] flex justify-between items-center">
     <div className='logo'>  
        <h1 className='text-2xl'>VORTEX</h1>
        </div>
        <div className="links flex gap-10">
            <a className='text-lg  capitalize font-regular'>Services</a>
            <a className='text-lg  capitalize font-regular'>Our Work</a>
            <a className='text-lg  capitalize font-regular'>About Us</a>
            <a className='text-lg  capitalize font-regular'>Insights</a>
            <a className='text-lg  capitalize font-regular ml-32'>Contact</a>
        </div>
    </div>
  )
}

export default Navbar
