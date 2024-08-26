"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import { radToDeg } from 'three/src/math/MathUtils.js'
import '../sub/hi.css';

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[10px] border border-[#fff] opacity-[2.9] rounded-[12px]"
      >
         <div className="flex items-center">
        <SparklesIcon className="text-[#fff] mr-[10px] h-5 w-5" />
        <h1 className="welcome-text text-[13px] text-white typing-animation">
            Hello ! Welcome to my Portfolio.
        </h1>
        </div>
      </motion.div>
      <motion.div
      variants={slideInFromLeft(0.5)}
      className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
      >
           Making Apps with modern technologies
      </motion.div>

      <motion.div
      variants={slideInFromRight(0.5)}
      className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
      >
                   As a Software Developer I'm here to turn your wishes and ideas into profitable projects and outputs, Your thoughts come true!
                   Don't hesitate to push on the message icon and send request requests of your needs. Thank you !
      </motion.div>
    </div>
  )
}

export default SkillText

