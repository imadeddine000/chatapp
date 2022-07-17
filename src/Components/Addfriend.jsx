import React from 'react'
import {AiFillPlusCircle} from 'react-icons/ai'

const Addfriend = () => {
  return (
    <div>
        <div className='flex items-center space-x-2 cursor-pointer hover:bg-blue-100  p-2 rounded-md justify-between'>
           <div className='flex items-center space-x-3'>
           <div className='w-10 h-10 rounded-full bg-orange-400 items-center flex justify-center'>
                <span className=''>
                    I
                </span>
            </div>
            <div>
                <h1>
                    Imadeddine kebour
                </h1>
            </div>
           </div>
            <div className='flex  items-center'>
                <abbr title="add contact">
                <button className='text-orange-400 text-2xl hover:bg-gray-300 p-2 rounded-full '>
                <AiFillPlusCircle/>
                </button>
                </abbr>
            </div>
        </div>
    </div>
  )
}

export default Addfriend