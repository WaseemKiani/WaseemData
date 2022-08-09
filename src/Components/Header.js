import React from 'react'
import logo from "./../images/logo.png";
import "./Header.css"
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";

const Header = () => {
    let {isAuthenticated} = useSelector(state=>state.User);
    const {isAuthenticatedWorker} = useSelector((state)=>state.Worker);
    
    let hide;
    if(isAuthenticatedWorker || isAuthenticated){
        hide=true;
    }
  return (
    <>
        <div className='HeaderContainer'>
            <img src={logo} className="logo" />
            <nav>
                <ul className='nav_links'>
                    <li><Link className='cta' to="/">Home</Link></li>
                    <li><Link className='cta' to="/About">About</Link></li>
                    <li><Link className='cta' to="/Contact">Contact</Link></li>
                    {isAuthenticatedWorker ?<li><Link className='cta' to="/Myprofile">Profile</Link></li>:<h1></h1>}
                </ul>
            </nav>
            {!hide ?<Link className='cta' to="/login"><button>Login / Register</button></Link>:
            <h1></h1>}
            
            
            
            {/* <ul>
                <li>Home</li> 
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
            </ul> */}
        </div>
    </>
  )
}

export default Header