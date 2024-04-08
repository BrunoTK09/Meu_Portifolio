import React from 'react'
import ProjectItem from './ProjectItem'
import ondesanca from '../assets/ondesanca.png'
import ogb from '../assets/ogb.png'
import chadcode from '../assets/chadcode.png'

function Projects() {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
          <p className='text-center py-8'>
            Here are some of the projects I have created or participated
          </p>
          <div className='grid sm:grid-cols-2 gap-12'>
              <ProjectItem img={ondesanca} title='Onde Sanca' />
              <ProjectItem img={chadcode} title='Chad Code' />
              <ProjectItem img={ogb} title='Oring Geek Brasil' />
          </div>
    </div>
  )
}

export default Projects