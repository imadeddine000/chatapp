import React from 'react'
import Chatsiderow from './Chatsiderow'
import Messagespage from './Messagespage'
import Sendmessage from './Sendmessage'

const Chatside = () => {
  return (
    <div className='hidden flex-col h-[100vh] sm:grow  md:flex md:flex-col md:h-[100vh]'>
        <Chatsiderow/>
        <Messagespage/>
        <Sendmessage/>
    </div>
  )
}

export default Chatside