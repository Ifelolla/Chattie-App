import React from 'react';
import Add from "../img/add_img.png";
import Logo from "../img/logo.jpg";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth} from "firebase/auth";

const Register = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const Username =e.target[0].value;
        const email= e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

        const res=createUserWithEmailAndPassword(auth, email, password)
    }


    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <div className="header">
                  <img src={Logo} alt='chattie logo' />
                  <span className='logo'>Chattie</span>
                </div>
                <span className='title'>Register</span>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Username'/>
                    <input type='email' placeholder='email'/>
                    <input type='password' placeholder='password'/>
                    <input style={{display:"none"}} type='file' id='file'/>
                    <label htmlFor='file'>
                      <img src={Add} alt=" " />
                      <span>Add a display image</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>Don't have an account? Sign up</p>
            </div>
        </div>
    );
};

export default Register;