import { motion } from 'framer-motion';
import React from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { css, keyframes } from '@emotion/react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Atropos from 'atropos/react';
import 'atropos/css';

const glitch = keyframes`
  0% {
    clip: rect(24px, 9999px, 27px, 0);
  }
  5% {
    clip: rect(85px, 9999px, 90px, 0);
  }
  10% {
    clip: rect(10px, 9999px, 15px, 0);
  }
  15% {
    clip: rect(47px, 9999px, 50px, 0);
  }
  20% {
    clip: rect(75px, 9999px, 80px, 0);
  }
  25% {
    clip: rect(55px, 9999px, 60px, 0);
  }
  30% {
    clip: rect(90px, 9999px, 95px, 0);
  }
  35% {
    clip: rect(80px, 9999px, 85px, 0);
  }
  40% {
    clip: rect(12px, 9999px, 17px, 0);
  }
  45% {
    clip: rect(24px, 9999px, 27px, 0);
  }
  50% {
    clip: rect(85px, 9999px, 90px, 0);
  }
  55% {
    clip: rect(10px, 9999px, 15px, 0);
  }
  60% {
    clip: rect(47px, 9999px, 50px, 0);
  }
  65% {
    clip: rect(75px, 9999px, 80px, 0);
  }
  70% {
    clip: rect(55px, 9999px, 60px, 0);
  }
  75% {
    clip: rect(90px, 9999px, 95px, 0);
  }
  80% {
    clip: rect(80px, 9999px, 85px, 0);
  }
  85% {
    clip: rect(12px, 9999px, 17px, 0);
  }
  90% {
    clip: rect(24px, 9999px, 27px, 0);
  }
  95% {
    clip: rect(85px, 9999px, 90px, 0);
  }
  100% {
    clip: rect(10px, 9999px, 15px, 0);
  }
`;

const textGlitchStyle = css`
  position: relative;
  color: white;
  font-size: 2em;
  font-weight: bold;
  text-transform: uppercase;
  &:before,
  &:after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    background: black;
    clip: rect(0, 0, 0, 0);
  }
  &:before {
    left: 2px;
    text-shadow: -2px 0 red;
    animation: ${glitch} 2s infinite linear alternate-reverse;
  }
  &:after {
    left: -2px;
    text-shadow: -2px 0 blue;
    animation: ${glitch} 2s infinite linear alternate-reverse;
    animation-delay: -1s;
  }
`;

function Landing() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};

  return (
    <div data-scroll data-scroll-speed="-.3" data-scroll-section className='relative w-full h-screen bg-zinc-900 pt-1'>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#000000",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className='text-structure mt-40  overflow-hidden whitespace-nowrap'>
        {/* Right-to-Left Marquee */}
        <Atropos className="my-atropos">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: '-100%' }}
            transition={{ ease: "linear", duration: 15, repeat: Infinity }}
            className='flex text-[7.5vw] font-bold uppercase leading-none tracking-tighter font-["Roboto_Condensed"]'
          >
            <span style={{ fontSize: '250px' }} className='mr-5' css={textGlitchStyle} data-text="We Design">We Design</span>
            <span className='mr-5' css={textGlitchStyle} data-text="Create">Create</span>
            <span style={{ fontSize: '200px' }} className='mr-5' css={textGlitchStyle} data-text="Animate">Animate</span>
          </motion.div>
        </Atropos>
        {/* Left-to-Right Marquee */}
        <Atropos className="my-atropos">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ ease: "linear", duration: 15, repeat: Infinity }}
            className='flex text-[7.5vw] font-bold uppercase leading-none tracking-tighter font-["Roboto_Condensed"] mt-10'
          >
            <span className='mr-5' css={textGlitchStyle} data-text="We Design">We Design</span>
            <span style={{ fontSize: '250px' }} className='mr-5' css={textGlitchStyle} data-text="Create">Create</span>
            <span className='mr-5' css={textGlitchStyle} data-text="Animate">Animate</span>
          </motion.div>
        </Atropos>
      </div>
      <div className='border-t-2 border-zinc-700 mt-28 flex justify-between py-5 px-20'>
        <p className="text-md font-regular tracking-light leading-none">For public and private companies</p>
        <p className="text-md font-regular tracking-light leading-none">From the first pitch to IPO</p>
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[2px] border-zinc-400 rounded-full text-sm uppercase">Start the project</div>
          <div className='w-10 h-10 rounded-full border-[2px] border-zinc-400 flex items-center justify-center'>
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
