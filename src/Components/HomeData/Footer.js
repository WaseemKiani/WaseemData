import React from 'react'
import img from "./../../images/logo.png"
import playStore from "./../../images/playstore.png"
import appStore from  "./../../images/Appstore.png"

import "./Footer.css";
/* 
import playstore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png"; */
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
    <div className='leftFooter'>
    <h4>DOWNLOAD OUR APP</h4>
    <p>Download Our App for Androids and IOS Mobiles</p>
    <img src={playStore} alt="playStore"/>
    <img src={appStore} alt="AppStore"/>
    </div>

    <div className='midFooter'>
        <h1> Ecommerce </h1>
        <p>High Quality is Our first Priority</p>
        <p>Copyrights 2021 &copy; MeM.WaseemKiani</p>
    </div>

    <div className='rightFooter'>
    <h4>Follow Us</h4>
        <a href="http://instagram.com/meabhisingh">Instagram</a>
        <a href="http://youtube.com/6packprogramemr">Youtube</a>
        <a href="http://instagram.com/meabhisingh">Facebook</a>
    </div>

    </footer>

  )
  
}

export default Footer