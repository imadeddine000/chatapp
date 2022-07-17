import React from 'react'
import {AiFillPlusCircle} from 'react-icons/ai'
import {HiThumbUp} from 'react-icons/hi'
import {BiSend} from 'react-icons/bi'

const Sendmessage = () => {
  return (
    <div className='flex p-2 w-[100%]'>
        <div className='flex items-center space-x-0 grow'>
            <div className='flex items-center grow bg-gray-300 rounded-2xl p-1 '>
                <input className='grow outline-none bg-gray-300 pl-1' type="text" name="" id=""  placeholder='Type a message ...'/>
                <div className='flex items-center text-xl space-x-1 '>
                    <div className='text-violet-600 text-2xl hover:rounded-full hover:bg-gray-400 p-1 cursor-pointer'>
                    <BiSend/>
                    </div>
                </div>
                
            </div>
                <div className='text-violet-600 text-2xl cursor-pointer flex items-center '>
                    <button>
                    <HiThumbUp/>
                    </button>
                </div>
        </div>
    </div>
  )
}

export default Sendmessage