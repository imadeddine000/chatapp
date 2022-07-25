import React,{useState,useEffect,componentDidUpdate}  from 'react'
import Chatsiderow from './Chatsiderow'
import Messagespage from './Messagespage'
import Sendmessage from './Sendmessage'
import axios from 'axios'
import {useLocation} from 'react-router-dom'
const Chatside = () => {
  const location=useLocation()
  const [friend, setfriend] = useState('');
  useEffect(()=>{
  let id=window.location.pathname.slice(6,window.location.pathname.length)
        axios.post('http://localhost:3001/friendbyid',{id:id}).then(response=>{
            setfriend(response.data)
        })
          console.log(window.location.pathname)
    },[location])
  return (
    <>
      <div className='hidden flex-col h-[100vh] sm:grow  md:flex md:flex-col md:h-[100vh]'>
        {friend&&<Chatsiderow friend={friend}/>}
        <Messagespage/>
        <Sendmessage/>
      </div>
      <div className=' flex-col w-[100%] h-[100vh]  flex md:hidden absolute bg-white'>
        <Chatsiderow/>
        <Messagespage/>
        <Sendmessage/>
    </div>
    </>
  )
}

export default Chatside