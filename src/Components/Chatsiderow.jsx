import React from 'react'
import {BsFillCameraVideoFill,BsFillTelephoneFill,BsThreeDotsVertical} from 'react-icons/bs'
import { UserPromptHandler } from 'selenium-webdriver/lib/capabilities'

const Chatsiderow = () => {
  return (
    <div className='flex justify-between bg-gray-100 p-2 border-b-2 '>
        <div className='flex px-2'>
            <div className='px-2 flex items-center '>
                <img className='w-12 h-12 sm:w-10 sm:h-10 rounded-full' src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
            <div className='flex-col px-2'>
                <h1 className='text-md text-black sm:text-sm'>Farouk Benkhelifa</h1>
                <p className='text-sm text-gray-300 sm:text-xs'>Last active 2 hours ago</p>
            </div>
        </div>
        <div className='flex text-violet-800 items-center  space-x-5'>
            <div className='hover:rounded-full cursor-pointer hover:bg-gray-200 p-3'>
            <BsFillTelephoneFill/>
            </div>
            <div className='hover:rounded-full cursor-pointer hover:bg-gray-200 p-3'>
            <BsFillCameraVideoFill/>
            </div>
            <div className='hover:rounded-full cursor-pointer hover:bg-gray-200 p-3'>
            <BsThreeDotsVertical/>
            </div>
        </div>
    </div>
  )
}

export default Chatsiderow