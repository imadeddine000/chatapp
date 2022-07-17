import React from 'react'

const Signin = () => {
  return (
    <div className='flex flex-col w-[100%] items-center h-[100vh] justify-center '>
            <div className='text-xl text-blue-900  '>
                Create an account
            </div>
         <div className='p-5 bg-white shadow  rounded-md '>
            <div className='flex flex-col p-2 space-y-5'>
                <input type="text" placeholder='username' className='bg-gray-200 w-fit p-2 rounded-xl focus:border-blue-900 focus:border-2 outline-none' />
                <input type="password" placeholder='password' className='bg-gray-200 w-fit p-2 rounded-xl focus:border-blue-900 focus:border-2 outline-none'/>
            </div>
            
            <div className='p-2 flex  items-center space-x-2'>
                <div className='p-2 bg-blue-900 hover:bg-blue-800 rounded-xl w-fit'>
                    <button className='px-2 '>Sign Up</button>
                </div>
                <div>
                    <button className='hover:text-blue-900'>Already logged in?</button>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Signin