import React,{useState,useEffect,useContext}  from 'react'
import Chatsiderow from './Chatsiderow'
import Messagespage from './Messagespage'
import Sendmessage from './Sendmessage'
import axios from 'axios'
import io from 'socket.io-client'
import {useLocation} from 'react-router-dom'
import MessagesContext from '../MessagesContext'
import RoomContext from '../RoomContext'


const Chatside = ({socket}) => {
  const location=useLocation()
  const [friend, setfriend] = useState('');
  const {messages,setmessages}=useContext(MessagesContext)
  const {room,setroom}=useContext(RoomContext);
  
  useEffect(()=>{
  let id=window.location.pathname.slice(6,window.location.pathname.length)
        axios.post('http://localhost:3001/friendbyid',{id:id}).then(response=>{
            setfriend(response.data)
        })
        
    },[location])
   const generateRoom=async()=>{
     const roomNumber=await friend.username.length*1+localStorage.getItem('username').length*1
    let roomname='room'+roomNumber
    setroom(roomname)
    console.log(roomname)
   }
   generateRoom()
  return (
    <>
      <div className='hidden flex-col h-[100vh] sm:grow  md:flex md:flex-col md:h-[100vh]'>
        {friend&&<Chatsiderow friend={friend}/>}
        <Messagespage socket={socket}/>
        <Sendmessage socket={socket}/>
      </div>
      <div className=' flex-col w-[100%] h-[100vh]  flex md:hidden absolute bg-white'>
        <Chatsiderow friend={friend}/>
        <Messagespage socket={socket}/>
        <Sendmessage socket={socket}/>
    </div>
    </>
  )
}

export default Chatside