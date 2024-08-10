import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <section id='projects'>
    
    <div className='flex flex-col items-center justify-center py-0 mt-[200px]'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 '>
           My projects
        </h1>
        <div className='w-full h-[360px] flex flex-col md:flex-row gap-10 px-10'>
        <ProjectCard
  src="/imboni.png"
  title="Modern Learning Platform"
  description="This is an e-learning platform and website where a student is able to interact with his tutor."
/>

<ProjectCard
  src="/festava.png"
  title=" Web for Hosting shows"
  description="This is an interactive website for hostinga and advertising shows and ceremonies occasions."
  
/>

<ProjectCard
  src="/edu.png"
  title="Online website for meetings"
  description="This is an online meeting channel for education and other chats and discussions are made."
  
/>


        </div>
    </div>
    </section>
  )
}

export default Projects