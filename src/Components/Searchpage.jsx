import React from 'react'
import Addfriend from './Addfriend'

const Searchpage = () => {
  return (
    <div className='absolute flex w-[100%] md:w-[39%]'>
        <div className=' bg-white shadow grow p-4 rounded-md mt-20 m-2'>
        <Addfriend/>
        <Addfriend/>
        <Addfriend/>
        </div>
    </div>
  )
}

export default Searchpage