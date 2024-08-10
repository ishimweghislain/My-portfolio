"use client";

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import Image from 'next/image';

const HeroContent = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
      <motion.div
      variants={slideInFromTop}
      className='welcome-box py-[8px] py-[9px] border border-[#7042f88b] opacity-[0.9]'
      >
         <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
         <h1 className='welcome-text text-[13px]'>Fullstack Developer Portfolio</h1>
      </motion.div>
      
       <motion.div
       variants={slideInFromLeft(3)}
       className='flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto'
       >
        <span>Providing <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>the best </span>
         project experience </span>
       </motion.div>
  
       <motion.p
       variants={slideInFromLeft(3.3)}
       className='text-lg text-gray-400 my-5 max-w-[600px]'
       >
         I&apos;m a full Stack Software Developer Engineer with experience in website,
         Mobile and Software Development. check out my projects and skills.
       </motion.p>

       <motion.a
    variants={slideInFromLeft(3.5)}
    initial="hidden"
    animate="visible"
    className='px-4 py-2 text-sm text-center text-white cursor-pointer rounded-lg max-w-[200px] bg-gradient-to-r from-purple-500 to-cyan-500 hover:bg-purple-700'
  >
    Learn More!
  </motion.a>
      </div>

      <motion.div
      variants={slideInFromRight(2.5)}
      className='w-full h-full flex justify-center items-center'
      >
      <Image
      src="/img3.png"
      alt="work icons"
      height={150}
      width={650}
      />
    
      </motion.div>
    </motion.div>
  )
}

export default HeroContent