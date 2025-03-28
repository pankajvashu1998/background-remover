import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className=' p-4 shadow  w-full bg-gray-300'>
            <div>
                <div className='flex items-center  gap-3'>
                    <img src="safari-pinned-tab.svg" alt="" className='w-[60px]'/>
                    <h1 className='text-4xl font-bold text-gray-700'>remove</h1>
                    <h1 className='text-4xl font-bold text-gray-500'>bg</h1>
                </div>
            </div>   
        </nav>
    </div>
  )
}

export default Navbar
