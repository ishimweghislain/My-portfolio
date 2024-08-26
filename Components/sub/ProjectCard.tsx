import React from 'react'
import Image from 'next/image';

interface Props {
    src: string;
    title: string;
    description: string
}
const ProjectCard = ({ src, title, description} : Props) => {
  return (
    <div className='relative overflow-hidden rounded-lg shadow-lg border border-[#A06E1]'>
        <Image
        src={src}
        alt='title'
        width={1000}
        height={1000}
        className='w-full object-contain'
         />
          <div className="relative p-4 flex flex-col items-center"> {/* Added flex and items-center */}
        <h1 className="text-2xl font-semibold text-white text-center">{title}</h1>
        <p className="mt-2 text-gray-300 text-center">{description}</p>
        
        <button 
          className="mt-4 px-6 py-2 text-sm font-medium mt-[10px] text-white bg-purple-600 rounded-md hover:bg-purple-700 transition-colors duration-300 cursor-pointer"
        >
          Click to Visit site !
        </button>
      </div>
    </div>
  )
}

export default ProjectCard