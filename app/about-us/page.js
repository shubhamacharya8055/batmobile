"use client"

import Image from 'next/image';
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from 'react';
import { openToGmail } from '@/lib/constants';

export default function Page() {

const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

const x = useTransform(mouseX, [-windowSize.width / 2, windowSize.width / 2], [-20, 20]);
const y = useTransform(mouseY, [-windowSize.height / 2, windowSize.height / 2], [-20, 20]);

useEffect(() => {

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const handleMouseMove = (event) => {
    mouseX.set(event.clientX - windowSize.width / 2);
    mouseY.set(event.clientY - windowSize.height / 2);
  };

  if (typeof window !== 'undefined') {
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }

}, []); 

  return (
    <div className="relative xl:h-[87vh] h-[91vh] overflow-hidden cursor-pointer">
      {/* Full-Screen Image with Blur and Glassmorphism */}
      <motion.div style={{x,y}}
      className="w-full h-full absolute inset-0"
      >

      <Image
        src="/batman_one.jpg" 
        alt="Batmobile"
        layout="fill"
        objectFit="cover"
        className="blur-sm filter brightness-75 scale-110 backdrop-filter backdrop-blur-md" // Apply blur and glassmorphism effects
        />
    </motion.div>


    <div className="absolute xl:top-1/3 left-[46%] pl-10 transform -translate-x-1/2 -translate-y-1/2 xl:w-full w-full xl:text-center top-1/2">
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl xl:leading-[5.2rem] xl:w-4/5 font-bold mx-auto text-white mb-8 drop-shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We help you to grow 2x faster than you are!
        </motion.h1>
        <motion.button
        onClick={openToGmail}
          className="bg-white text-red-500 hover:bg-red-500 hover:text-white font-bold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Contact Us
        </motion.button>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      {/* Company Info with Interactions */}
      <motion.div 
        className="absolute bottom-0 h-32 xl:h-20 inset-x-0 transform  flex space-x-8 text-white bg-black/20 backdrop-filter backdrop-blur-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        
        <div className='w-full h-full flex xl:justify-evenly justify-around items-center cursor-pointer'>
            <div className=' flex xl:flex-row xl:gap-x-2 flex-col gap-y-1'>
            <h2 className='font-medium text-xs'>Address:</h2>
            <p className='font-normal text-xs hover:underline hover:underline-offset-4'>4th block - Green Street,</p>
            <p className='font-normal text-xs hover:underline hover:underline-offset-4'>Kumta</p>
            </div>
            <div className='flex xl:flex-row xl:gap-x-3 flex-col gap-y-1'>
            <h2 className='font-medium text-xs'>Contact us:</h2>
            <p className='font-normal text-xs hover:underline hover:underline-offset-4'>batmobile@bat.com</p>
            <p className='font-normal text-xs hover:underline hover:underline-offset-4'>+91-6363303057</p>
            </div>

        </div>
      </motion.div>
    </div>
  );
}
