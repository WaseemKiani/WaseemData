import React from 'react'
import logo from "./../../images/logo.png";
import "./Header.css"
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";
import UserOptions from './../Pages/SpeedDial/UserOptions';

const Header = () => {
    const {loading, user, isAuthenticated} = useSelector((state)=>state.User);
    const worker = useSelector((state)=>state.Worker);

    let data;

  if(isAuthenticated){
    data=user;
  }
  if(worker.isAuthenticatedWorker){
    data=worker.user.user;
  }

    let hide;
    if(worker.isAuthenticatedWorker || isAuthenticated){
        hide=true;
    }
  return (
    <>
        <div className='HeaderContainer'>
            <Link to='/'><img src={logo} className="logo" /></Link>
            <nav>
            {data && <UserOptions user={data}/>}
                <ul className='nav_links'>
                    <li><Link className='cta' to="/">Home</Link></li>
                    <li><Link className='cta' to="/About">About</Link></li>
                    <li><Link className='cta' to="/Contact">Contact</Link></li>
                    {data && <><li></li><li></li></>}
                </ul>
            </nav>
            {!hide ?<Link className='cta' to="/login"><button>Login </button></Link>:
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