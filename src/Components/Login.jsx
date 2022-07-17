import React from 'react'
import Signin from './Signin'
import { useState } from 'react';

const Login = () => {
    const [loginpage, setloginpage] = useState(false);
    const handleLoginPage=()=>{
        setloginpage(true)
    }
  return (
    <>
    {loginpage?<>
     <button className='text-blue-900 p-5 hover:text-gray-300' onClick={()=>setloginpage(false)}> back to Login</button>   
    <Signin/>
    </>:
        <div className='relative h-[100vh]'>
        <div className='p-5 flex  items-center justify-between'>
            <div className='text-2xl text-violet-900 text-bold'>
                iekchatapp
            </div>
            <div className='bg-orange-500 p-2 rounded-md hover:bg-orange-300'>
                <a href="https://www.iekdev.netlify.app">
                    contact developer
                </a>
            </div>
        </div>
        <div className='p-5'>
            <h1 className='text-5xl'>
                Chat with friends <span className='text-blue-900 space-x-2'>Anytime</span>
                <br /> <span className=''>& Anywhere</span>
            </h1>

        </div>
        <div className='p-5 '>
            <div className='flex flex-col p-2 space-y-5'>
                <input type="text" placeholder='username' className='bg-gray-200 w-fit p-2 rounded-xl focus:border-blue-900 focus:border-2 outline-none' />
                <input type="password" placeholder='password' className='bg-gray-200 w-fit p-2 rounded-xl focus:border-blue-900 focus:border-2 outline-none'/>
            </div>
            <div className='p-2 flex  items-center space-x-2'>
                <div className='p-2 bg-blue-900 rounded-xl w-fit'>
                    <button className='px-2'>Login</button>
                </div>
                <div>
                    <button onClick={handleLoginPage} className='hover:text-blue-900'>u don't have an accout?</button>
                </div>
            </div>
        </div> 
        <div className='absolute bottom-0 w-[100%]  flex justify-center'>
            <span className='' >made with ❤️ by <a className='text-blue-900' href="mailto:imadeddinekebourlite@gmail.com">imadeddine kebour</a></span>
        </div>
        
    </div>
    }
    </>
    
  )
}

export default Login