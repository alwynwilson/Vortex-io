import React from 'react'
import {motion} from "framer-motion"

function Marquee() {
  return (
    <div data-scroll data-scroll-speed=".1" data-scroll-section className='w-full h-[80vh] bg-[#FFC96F] py-20 rounded-tl-2xl rounded-tr-2xl'>
      <div className="text border-t-2 border-b-2 border-zinc-400 flex overflow-hidden whitespace-nowrap ">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='text-[12vw] leading-none font-["Roboto_Condensed"] font-bold uppercase pt-5 mb-5 pr-10 text-black'>VORTEX DESIGNS</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='text-[12vw] leading-none font-["Roboto_Condensed"] font-bold uppercase pt-5 mb-5 pr-10'>VORTEX DESIGNS</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:10}} className='text-[12vw] leading-none font-["Roboto_Condensed"] font-bold uppercase pt-5 mb-5 pr-10 text-black'>VORTEX DESIGNS</motion.h1>
      </div>
    </div>
  )
}

export default Marquee
