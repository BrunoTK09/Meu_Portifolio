import React from 'react';
import WorkItem from './WorkItem';

const data= [
    {
        year: 2024,
        title: 'Merola Informatica',
        duration: 'x months',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        year: 2023,
        title: 'NextDial',
        duration: '4 months',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item, idx)=>(
            <WorkItem 
                key = {idx} 
                year = {item.year} 
                title ={item.title}
                duration = {item.duration} 
                details = {item.details}
            />
        ))}
    </div>
  )
}

export default Work