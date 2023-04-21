import React from 'react'

export const Chats = () => {
  return (
    <div className='chats'>
         <div className="userChat">
            <img 
              src='https://images.pexels.com/photos/16337978/pexels-photo-16337978.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt=''
            />
            <div className="userChatInfo">
                <span>Evelyn</span>
                <p>Hello</p>
            </div>
        </div>
        <div className="userChat">
            <img 
              src='https://images.pexels.com/photos/16337978/pexels-photo-16337978.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt= "" />
            <div className="userChatInfo">
                <span>Evelyn</span>
                <p>Hello</p>
            </div>
        </div>
        <div className="userChat">
            <img 
              src='https://images.pexels.com/photos/16337978/pexels-photo-16337978.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt= ""
            />
            <div className="userChatInfo">
                <span>Evelyn</span>
                <p>Hello</p>
            </div>
        </div>
    </div>
  )
}