import React from 'react'
import Messagereceiver from './Messagereceiver'
import Messagesender from './Messagesender'

const Messagespage = () => {
  return (
    <div className='grow p-2 flex flex-col scroll-smooth w-[100%] overflow-auto'>
        <Messagereceiver/>
        <Messagesender/>
    </div>
  )
}

export default Messagespage