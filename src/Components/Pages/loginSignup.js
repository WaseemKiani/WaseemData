import React, { Fragment , useEffect, useRef, useState} from 'react'
import "./loginSignup.css"
import { Link } from 'react-router-dom';
import {HiOutlineMail} from 'react-icons/hi';
import {BiLock} from  'react-icons/bi'; 
import {AiOutlineUser} from 'react-icons/ai';
import {useSelector, useDispatch} from "react-redux";
import {login , registerUser} from "../../Redux/actions/userAction";
import {registerWorker, workerlogin} from "../../Redux/actions/workerActions";

/* 
import EmailIcon from '@mui/icons-material/Email';
import FaceIcon from '@mui/icons-material/Face';
import LockOpenIcon from '@mui/icons-material/LockOpen';
 */

import {useNavigate} from "react-router-dom";





const LoginSignUp = () => {
    const histroy = useNavigate();

    const {loading, user, isAuthenticated} = useSelector((state)=>state.User);
    const {isAuthenticatedWorker} = useSelector((state)=>state.Worker);

    
    
    useEffect(() => {
        if(isAuthenticated || isAuthenticatedWorker){
            histroy("/");
        }
    }, [isAuthenticated,isAuthenticatedWorker]);


    const dispatch = useDispatch();

                                        // States Decleration
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loginType, setLoginType] = useState("user");
    
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
    category:"",
    image:""
})

const registerDataChange = (e)=>{
    setUser({...users, [e.target.name]:e.target.value}) 
}

const {name , email, password,category, image}= users;
    
    const registerSubmit =(e)=>{
        e.preventDefault();
       
        if(category === "user"){
            dispatch(registerUser(users));
        }else{  
            dispatch(registerWorker(users));
                }
        

    }

    const loginSubmit = (e)=>{
        e.preventDefault();
        if(loginType==="user"){
            dispatch(login(loginEmail,loginPassword));
        }else{
            dispatch(workerlogin(loginEmail,loginPassword));   
            
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
                    <div className='buttonA' ref={switcherTab}></div>
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

                            <div className=''>
                                <label for="type">Account Type:</label>
             <select id="accountType" required name="category" onChange={(e)=>setLoginType(e.target.value)}>
                                        <option selected value="user">User</option>
                                        <option value="worker">Worker</option>
                                    </select>
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
                            <select id="accountType" name="category" onChange={registerDataChange}>
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























