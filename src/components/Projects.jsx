import React from 'react'
import ProjectItem from './ProjectItem'
import image from '../assets/bronya.gif'

function Projects() {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
          <p className='text-center py-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <div className='grid sm:grid-cols-2 gap-12'>
              <ProjectItem img={image} title='Projects' />
              <ProjectItem img={image} title='Projects' />
              <ProjectItem img={image} title='Projects' />
              <ProjectItem img={image} title='Projects' />
          </div>
    </div>
  )
}

export default Projects