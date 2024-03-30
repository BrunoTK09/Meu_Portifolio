import React from 'react'
import {TypeAnimation} from 'react-type-animation';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover scale-x-[1]' src="https://i.pinimg.com/originals/0f/c3/65/0fc365e62a735ec59194ebae2d3c97ff.png"></img>
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div>
            <h1>I'm Bruno Mammana</h1>
            <h2>I'm a
            <TypeAnimation
      sequence={[
        'Developer',
        2000,
        'Coder',
        2000,
        'Tech Enthusiast',
        2000,
      ]}
      wrapper="div"
      cursor={true}
      speed={50}
      style={{ fontSize: '1em', paddingLeft: '5px'}}
      repeat={Infinity}
    />
       </h2>
       <div>
            <FaTwitter className='cursor-pointer' size={20} />
            <FaFacebook className='cursor-pointer' size={20} />
            <FaInstagram className='cursor-pointer' size={20} />
            <FaLinkedIn className='cursor-pointer' size={20} />
       </div>
      </div>
     </div>
    </div>
  )
}

export default Main