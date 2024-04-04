import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
        <form action='' method='POST' encType='multipart/form-data'>
            <div>
                <div>
                    <label>Name</label>
                    <input type="text" name='name' />
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="text" name='phone' />
                </div>
            </div>
        </form>
    </div>
  )
}

export default Contact