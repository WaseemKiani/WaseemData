import React, { Fragment , useRef, useState} from 'react'
import "./loginSignup.css"
import { Link } from 'react-router-dom';
import {HiOutlineMail} from 'react-icons/hi';
import {BiLock} from  'react-icons/bi'; 
import {AiOutlineUser} from 'react-icons/ai';
import {useSelector, useDispatch} from "react-redux";
import {login} from "../../Redux/actions/userAction";

/* 
import EmailIcon from '@mui/icons-material/Email';
import FaceIcon from '@mui/icons-material/Face';
import LockOpenIcon from '@mui/icons-material/LockOpen';
 */

import {useNavigate} from "react-router-dom";


const LoginSignUp = () => {
    const histroy = useNavigate();

    const dispatch = useDispatch();
    const {loading, user, isAuthenticated} = useSelector((state=> state.User));

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

const [users, setUser] = useState({
    name:"",
    email:"",
    password:"",
    type:""
})

const registerDataChange = (e)=>{
    setUser({...users, [e.target.name]:e.target.value}) 
}

const {name , email, password,type}= users;
    
    const registerSubmit =(e)=>{
        e.preventDefault();
        const myForm = new FormData();
        myForm.set("name",name);
        myForm.set("email",email);
        myForm.set("password",password);
        myForm.set("type",type);
        

        console.log(name,email,password,type)
    }

    const loginSubmit = (e)=>{
        e.preventDefault();
        dispatch(login(loginEmail,loginPassword));
        console.log(loginEmail,loginPassword);
        if(isAuthenticated){
            histroy("/");
        }
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
                        <AiOutlineUser/>
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
                        <HiOutlineMail />

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
                               <BiLock/>
                        <input 
                            type="password"
                            placeholder='Password'
                            required
                            name='password'
                            value={password}
                            onChange={registerDataChange}
                            />
                        </div>

                        <div className=''>
                        <label for="type">Account Type:</label>
                            <select id="accountType" name="type" onChange={registerDataChange}>
                                <option selected>-</option>
                                <option value="user">User</option>
                                <option value="worker">Worker</option>
                            </select>
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























