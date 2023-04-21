import React from 'react';
import Add from "../img/add_img.png";
import Logo from "../img/logo.jpg"

const Login = () => {
    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <div className="header">
                  <img src={Logo} alt='logo' />
                  <span className='logo'>Chattie</span>
                </div>
                <span className='title'>Register</span>
                <form>
                    <input type='email' placeholder='Email'/>
                    <input type='password' placeholder='Password'/>
                   
                    <button>Sign in</button>
                </form>
                <p>Don't have an account? Register</p>
            </div>
        </div>
    );
};

export default Login;