import React from 'react'
import Logo from "../img/logo.jpg";

export const Navbar = () => {
  return (
    <div className='navBar'>
        <span className= "logo"> <img className='img' src={Logo} alt='chattie logo' />Chattie</span>
        <div className="user">
            <img src='https://images.pexels.com/photos/16337978/pexels-photo-16337978.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt= ""/>
            <span>Evelyn</span>
            <button>Logout</button>
        </div>
    </div>
  )
}
