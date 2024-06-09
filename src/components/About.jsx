import React, { useEffect, useRef } from 'react';
import img1 from '../assets/img1.jpg';
import LocomotiveScroll from 'locomotive-scroll';
import img2 from '../assets/img2.jpg'; // Add additional images as needed
import img3 from '../assets/img3.png'; // Add additional images as needed
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';

function About() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      <div style={{ marginTop: '100px' }} data-scroll data-scroll-section data-scroll-speed="-.3" className='p-20 w-full bg-[#FFC96F] rounded-tl-3xl rounded-tr-3xl text-black font-["Neue_Montreal"] '>
        <h1 className='font-["Neue_Montreal"] w-[88%] text-[3.5vw] leading-[4vw] tracking-normal'>
          "Transform your vision into vibrant reality with our creative brilliance. At <span style={{fontWeight:"900"}}>VORTEX</span>, we craft compelling campaigns that captivate and convert. Elevate your brand with innovative strategies, stunning visuals, and impactful storytelling. Let’s create magic together!"
        </h1>
        <div className='flex border-t-[1px] mt-10 pt-10 justify-between font-semibold'>
          <div>
            <h1>Explore here:</h1>
          </div>
          <div className='w-[18vw]'>
            <h1 className='font-medium'>
              We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.
            </h1>
            <h1 className='font-medium mt-5'>
              We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
            </h1>
          </div>
          <div className='mt-10 flex flex-col'>
            <h1>Social:</h1>
            <a href='https://www.instagram.com'>Instagram</a>
            <a href='https://www.behance.net'>Behance</a>
            <a href='https://www.linkedin.com'>LinkedIn</a>
            <a href='https://www.facebook.com'>Facebook</a>
          </div>
        </div>
        <div className='w-full border-t-[1px] mt-20 pt-10 flex gap-5'>
          <div className="w-1/2">
            <h1 className='text-5xl font-["Neue_Montreal"]'>Our approach</h1>
            <button className='uppercase px-10 py-4 mt-10 bg-zinc-900 rounded-full text-white'>Read More</button>
          </div>
          <div className="w-1/2 h-[70vh] rounded-3xl">
            <img src={img1} alt="Our approach" className='rounded-3xl' />
          </div>
        </div>

        
        <div className='marquee mt-20 '>
          <div className='marquee-content '>
            <img src={img1} alt="Work 1" className='marquee-image h-[200vh]' />
            <img src={img2} alt="Work 2" className='marquee-image' />
            <img src={img3} alt="Work 3" className='marquee-image' />
            <img src={img4} alt="Work 3" className='marquee-image' />
            <img src={img5} alt="Work 3" className='marquee-image' />
            <img src={img6} alt="Work 3" className='marquee-image' />
            <img src={img7} alt="Work 3" className='marquee-image' />
            <img src={img8} alt="Work 3" className='marquee-image' />
            <img src={img9} alt="Work 3" className='marquee-image' />
            <img src={img10} alt="Work 3" className='marquee-image' />
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
