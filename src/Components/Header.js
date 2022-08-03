import React from 'react'
import logo from "./../images/logo.png";
import "./Header.css"
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
        <div className='HeaderContainer'>
            <img src={logo} className="logo" />
            <nav>
                <ul className='nav_links'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </nav>
            <Link className='cta' to="/login"><button>Login / Register</button></Link>
            
            
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