import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import Chatrow from './Chatrow'
import Searchpage from './Searchpage'
import { useState } from 'react'
const Topbar = () => {
    const [opensearch, setopensearch] = useState(false);
    const handleSearchChange=(e)=>{
        if(e.target.value.length>0){
            setopensearch(true)
        }else{
            setopensearch(false)
        }
    }
  return (
    <div className='bg-gray-100 h-[100vh] w-[100vw] md:w-[40vw]  overflow-auto scroll-smooth sm:border-r-2 border-violet-500 flex flex-col'>
        <div>
            <h1 className='text-center font-bold text-xl p-2' >
                Messages
            </h1>
        </div>
        <div className=' bg-gray-200 flex  items-center px-2 p-1 rounded-md mx-1'>
            <div className='grow'>
                <input type="text" placeholder='Search' className='grow sm:w-[95%] sm:text-sm md:grow bg-gray-200 outline-none' onChange={(e)=>handleSearchChange(e)}/>
            </div>
            <div className='text-gray-400'>
                <BiSearchAlt2/>
            </div>
        </div>
        <div className=''>
            <Chatrow/>
        </div>
        {opensearch?<Searchpage/>:<></>}
    </div>
  )
}

export default Topbar