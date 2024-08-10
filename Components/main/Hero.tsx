import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className='relative flex flex col h-full w-full'>

    <img  className='rotate 180 absolute top-[-280px] left-0 z[1] w-full h-full object-cover'
     src="./bhole.jpeg" />
     <HeroContent />
     
    </div>
  )
}

export default Hero