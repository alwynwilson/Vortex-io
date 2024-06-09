import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';

function Footer() {
    

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div  className='w-full h-screen bg-zinc-900 flex gap-5 font-["Roboto_Condensed"]'>
      <div className='w-1/2 flex flex-col h-full justify-between '>
      <div className='heading'> 
            <h1 className='text-9xl uppercase font-semibold tracking-tighter mt-20 mx-20'>Mind-</h1>
            <h1 className='text-9xl uppercase font-semibold tracking-tighter mx-20 -mt-5'>Blowing</h1>
      </div>
      <h3 className='font-bold text-2xl m-20'>Vortex.</h3>
      </div>
      <div className='w-1/2'>
      <h1 className='text-8xl uppercase font-semibold tracking-tighter mt-20'>PRESENTATIONS</h1>
      <div className='dets font-["Neue_Montreal"] mt-20'>
        <h3>Social:</h3>
        <a className='block' href="">Facebook</a>
        <a className='block' href="">Instagram</a>
        <a className='block' href="">Behance</a>
      </div>
      <div className='font-["Neue_Montreal"] mt-20'>
        <h3>Location:</h3>
        <h3>202-1965 W 4th Ave 
          <br/>
        Vancouver, Canada
        </h3>
      </div>
      <div className='font-["Neue_Montreal"] mt-20'>
        <h3>Mail:</h3>
        <h3>vortex@hello.design
        </h3>
      </div>
      
      </div>
    </div>
  )
}

export default Footer
