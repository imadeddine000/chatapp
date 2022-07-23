import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import Chatrow from './Chatrow'
import Searchpage from './Searchpage'
import { useState ,useEffect} from 'react'
import axios from 'axios'
const Topbar = () => {
    const [opensearch, setopensearch] = useState(false);
    const [search, setsearch] = useState('');
    const [menu, setmenu] = useState(false);
    const [friendList, setfriendList] = useState([]);
    const handleSearchChange=(e)=>{
        if(e.target.value.length>0){
            setopensearch(true)
            setsearch(e.target.value)
        }else{
            setopensearch(false)
        }
    }
    const handleMenu=()=>{
        if(menu){
            setmenu(false)
        }else{
            setmenu(true)
        }
    }
    const handlelogout=()=>{
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('username')
        window.location.href='/'
        
    }
    useEffect(() => {
        const username=window.localStorage.getItem('username')
        axios.post('http://localhost:3001/friendlist',{username}).then(response=>{
            setfriendList(response.data)
        })
    }, [search]);
  return (
    <div className='bg-gray-100 h-[100vh] w-[100vw] md:w-[40vw]  relative overflow-auto scroll-smooth sm:border-r-2 border-violet-500 flex flex-col'>
        <div className='flex items-center justify-between'>
            <div className='h-8 w-8 m-1 border-2 border-violet-800  bg-gray-200 rounded-full  flex items-center justify-center'>
                <h1 className=''>
                    <button onClick={handleMenu}>
                    {window.localStorage.getItem('username')[0].toUpperCase()}
                    </button>
                </h1>
            </div>

            <h1 className='text-center font-bold text-xl p-2 grow' >
                Messages
            </h1>
            
        </div>
        <div className=' bg-gray-200 flex  items-center px-2 p-1 rounded-md mx-1'>
            <div className='grow'>
                <input type="text" placeholder='Search' className='grow sm:w-[95%] sm:text-sm md:grow bg-gray-200 outline-none' onChange={(e)=>handleSearchChange(e)} value={search}/>
            </div>
            <div className='text-gray-400'>
                <BiSearchAlt2/>
            </div>
        </div>
        <div className=''>
            <Chatrow/>
        </div>
        {opensearch?<Searchpage search={search}/>:<></>}
        {menu?<div>
            <div className='absolute space-y-2 top-9 left-5 bg-white p-2 rounded-md shadow-md'>
                <h1 className='text-blue-900'>
                   hey, {window.localStorage.getItem('username')}
                </h1>
                <div className='p-2 hover:bg-gray-200 rounded-md'>
                    <button onClick={handlelogout}>
                        log out
                    </button>
                </div>
            </div>
        </div>:<></>}
    </div>
  )
}

export default Topbar