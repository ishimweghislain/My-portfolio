"use client";

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import Image from 'next/image';
import '../sub/hi.css';

const HeroContent = () => {
  return (
    <div className="flex flex-row relative items-center justify-center w-full h-full">
    <div className="absolute w-auto h-auto top-0 z-[5]">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInFromTop}
        className="text-[40px] font-medium text-center text-gray-200"
      >
        Performance<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> & </span>
        Security
      </motion.div>
      <motion.div
      variants={slideInFromRight(0.5)}
      className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
      >
            Visit Me Daily,We give you the best articles you desire in your epic mind.<br />I'm Coder
            and here to give you the best designs within your mind using codes to develop your projects<br />
            Feel free to contact me by clicking on the upper corner message icon also view my CV down here to hire me.
      </motion.div>
      <div className="flex justify-center items-center gap-4 mt-10 ">
      <motion.a
        variants={slideInFromLeft(1)}
        initial="hidden"
        animate="visible"
        className='button'
      >
        Download Cv!
      </motion.a>
      <motion.a
        variants={slideInFromLeft(1)}
        initial="hidden"
        animate="visible"
        className='button'
      >
        Contact Me!
      </motion.a>
    </div>
    </div>
    <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] top-[-120px] w-auto h-auto">
      <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
        <Image
          src="/lock.png"
          alt="Lock top"
          width={200}
          height={200}
          className="translate-y-5 transition-all duration-200 group-hover:translate-y-1"
        />
      </div>
    </div>
    <div className="w-[80%] flex items-start justify-center absolute">
    <video
  src="/encry.mp4"
  loop
  muted
  autoPlay
  preload="auto"
  className="w-full h-auto"
  style={{ opacity: 0.2 }} // Adjust the opacity value as needed
>
</video>

    </div>
  </div>
  )
}

export default HeroContent