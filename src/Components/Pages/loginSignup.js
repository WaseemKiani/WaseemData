import React, { Fragment , useRef, useState} from 'react'
import "./loginSignup.css"
import { Link } from 'react-router-dom';
import {HiOutlineMail} from 'react-icons/hi';
import {BiLock} from  'react-icons/bi'; 
/* 
import EmailIcon from '@mui/icons-material/Email';
import FaceIcon from '@mui/icons-material/Face';
import LockOpenIcon from '@mui/icons-material/LockOpen';
 */

import {useNavigate} from "react-router-dom";


const LoginSignUp = () => {
                                        // States Decleration
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("")
    

                                        // Login Form and SignUp form SWAPING
    const loginTab = useRef(null);
    const switcherTab = useRef(null);
    const registerTab = useRef(null);
    
    const switchTabs = (e, tab) => {
        if (tab === "login") {
        switcherTab.current.classList.add("shiftToNeutral");
        switcherTab.current.classList.remove("shiftToRight");

        registerTab.current.classList.remove("shiftToNeutralForm");
        loginTab.current.classList.remove("shiftToLeft");
        }
        if (tab === "register") {
        switcherTab.current.classList.add("shiftToRight");
        switcherTab.current.classList.remove("shiftToNeutral");

        registerTab.current.classList.add("shiftToNeutralForm");
        loginTab.current.classList.add("shiftToLeft");
        }
    };
                    /* This is Section of SignUp Data Handling */ 

const [user, setUser] = useState({
    name:"",
    email:"",
    password:"",
})

const registerDataChange = (e)=>{
    setUser({...user, [e.target.name]:e.target.value}) 
}

const {name , email, password}= user;
    
    const registerSubmit =(e)=>{
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("name",name);
        myForm.set("email",email);
        myForm.set("password",password);
    }

    const loginSubmit = (e)=>{
        e.preventDefault();      
    }

    

  return (
    <Fragment>
        <div className='LoginSignupContainer'>
            <div className='LoginSignupBox'>
                <div>
                    <div className='Login-Signup-toggle'>
                    <p onClick={(e)=> switchTabs(e,"login")}>LOGIN</p>
                    <p onClick={(e)=> switchTabs(e,"register")}>REGISTER</p>
                    </div>
                    <button ref={switcherTab}></button>
                </div>

                <form className='loginForm' ref={loginTab} onSubmit={loginSubmit}>
                            <div className='loginEmail'>
                               {/*  <EmailIcon /> */}
                               <HiOutlineMail />
                                 

                                <input
                                type="email"
                                placeholder="Email"
                                required
                                value={loginEmail}
                                onChange={(e)=> setLoginEmail(e.target.value)}
                                />
                            </div>

                            <div className='loginPassword'>
                               {/*  <LockOpenIcon/> */}
                               <BiLock/>
                                <input
                                type="password"
                                placeholder="Password"
                                required
                                value={loginPassword}
                                onChange={(e)=> setLoginPassword(e.target.value)}
                                />
                            </div>
                        
                            <Link to="/password/forgot">Forget Password ?</Link>
                            <input type="submit" value="Login" className='loginBtn'/>
                </form>

                <form 
                className='signupForm'
                ref={registerTab}
                onSubmit={registerSubmit}
                >
                        <div className='signupName'>
                            {/* <FaceIcon/> */}
                            <input 
                            type="text"
                            placeholder='Name'
                            required
                            name='name'
                            value={name}
                            onChange={registerDataChange}
                            />
                        </div>

                        <div className='signupEmail'>
                        {/* <EmailIcon /> */}
                        <input 
                            type="email"
                            placeholder='Email'
                            required
                            name='email'
                            value={email}
                            onChange={registerDataChange}
                            />
                        </div>

                        <div className='signupPassword'>
                        {/* <LockOpenIcon/> */}
                        <input 
                            type="password"
                            placeholder='Password'
                            required
                            name='password'
                            value={password}
                            onChange={registerDataChange}
                            />
                        </div>

                        
                        <input
                        type="submit"
                        value="Register"
                        className='signupBtn'
                        />

                </form>


            </div>
        </div>
    </Fragment>

  )
}

export default LoginSignUp























