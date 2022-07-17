import React from 'react'
import {BsFillCameraVideoFill,BsFillTelephoneFill,BsThreeDotsVertical} from 'react-icons/bs'

const Chatsiderow = () => {
  return (
    <div className='flex justify-between bg-gray-100 p-2 border-b-2 '>
        <div className='flex px-2'>
            <div className='px-2 flex items-center justify-center bg-gray-200 rounded-full w-10 h-10 '>
                <span>
                    F
                </span>
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