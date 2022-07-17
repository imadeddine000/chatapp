import React from 'react'
import {AiFillPlusCircle} from 'react-icons/ai'
import {TbPaperclip} from 'react-icons/tb'
import {BsEmojiSmileFill} from 'react-icons/bs'
import {HiThumbUp} from 'react-icons/hi'
const Sendmessage = () => {
  return (
    <div className='flex p-2 w-[100%]'>
        <div className='flex items-center space-x-0 grow'>
            <div className='text-2xl text-violet-900 p-0 hover:bg-gray-300 rounded-full cursor-pointer'>
                <AiFillPlusCircle/>
            </div>
            <div className='flex items-center grow bg-gray-300 rounded-2xl p-1 '>
                <input className='grow outline-none bg-gray-300 pl-1' type="text" name="" id=""  placeholder='Type a message ...'/>
                <div className='flex items-center text-xl space-x-1 '>
                    <div className='text-violet-600 text-xl hover:rounded-full hover:bg-gray-400 p-1 cursor-pointer'>
                    <BsEmojiSmileFill/>
                    </div>
                    <div className='text-violet-600 text-xl  hover:rounded-full hover:bg-gray-400 p-1 cursor-pointer'>
                    <TbPaperclip/>
                    </div>
                </div>
                
            </div>
                <div className='text-violet-600 text-2xl cursor-pointer '>
                    <HiThumbUp/>
                </div>
        </div>
    </div>
  )
}

export default Sendmessage