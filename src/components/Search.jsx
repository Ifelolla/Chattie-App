import React from 'react'

export const Search = () => {
  return (
    <div className='search'>
        <div className="searchForm">
            <input type='text' placeholder='Find a user'/>
        </div>
        <div className="userChat">
            <img src='https://images.pexels.com/photos/16337978/pexels-photo-16337978.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt=""/>
            <div className="userChatInfo">
                <span>Evelyn</span>
            </div>
        </div>
    </div>
  )
}
