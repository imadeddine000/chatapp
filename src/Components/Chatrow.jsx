import React from 'react'
import {Link} from 'react-router-dom'

const Chatrow = () => {
  return (
    <div>
        <div className='flex justify-between px-6 sm:px-1 items-center hover:bg-gray-200 cursor-pointer rounded-md mx-1 sm:mx-0 my-4 p-1 sm:p-1'>
            <div>
                <img className='rounded-full w-12 h-12 sm:w-12 sm:h-12' src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className=' grow p-1 mx-3 sm:mx-1 md:mx-3'>
                <h1 className='text-md'>
                    <Link to='/chat/123'>
                        Imadeddine kebour
                    </Link>
                </h1>
                <div className='flex items-center'>
                    <p className='text-gray-400 text-xs'>
                         message
                    </p>
                    <p className='text-gray-400 px-3 text-xs'>
                          5m
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chatrow