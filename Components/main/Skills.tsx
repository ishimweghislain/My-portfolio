import { Backend, Frontend_designs, Fullstack, Other } from '@/constants'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'

const Skills = () => {
  return (
   <section
   id='skills'
   className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidde pb-80 py-20'
   style={{transform: "scale(0.9)"}}
    >
      <SkillText />
   <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
   {Frontend_designs.map((skill, index) => (
          <SkillDataProvider
            key={index}
            src={skill.src}
            width={60}  // Set a default width or get it from somewhere else
            height={60}  // Set a default height or get it from somewhere else
            index={index}
          />
        ))}
   </div>
   <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
   {Backend.map((skill, index) => (
          <SkillDataProvider
            key={index}
            src={skill.src}
            width={60}  // Set a default width or get it from somewhere else
            height={60}  // Set a default height or get it from somewhere else
            index={index}
          />
        ))}
   </div>
   
   <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
   {Fullstack.map((skill, index) => (
          <SkillDataProvider
            key={index}
            src={skill.src}
            width={60}  // Set a default width or get it from somewhere else
            height={60}  // Set a default height or get it from somewhere else
            index={index}
          />
        ))}
   </div>
   <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
   {Other.map((skill, index) => (
          <SkillDataProvider
            key={index}
            src={skill.src}
            width={60}  // Set a default width or get it from somewhere else
            height={60}  // Set a default height or get it from somewhere else
            index={index}
          />
        ))}
   </div>
   <div className='h-full w-full absolute'>
   <div className="w-full h-[40] z-[-10] mt-[100px] absolute flex items-center justify-center bg-cover">
  <video
    className="w-full h-auto"
    preload="false"
    playsInline
    loop
    muted
    autoPlay
    src="/ne.mp4">
  </video>
</div>

   </div>
   </section>
  )
}

export default Skills