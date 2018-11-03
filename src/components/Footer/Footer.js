import React from 'react';
import logo from './logo.svg';
import "./Footer.css";
  
const Footer = () => {
    return(

<nav id="footer" className="navbar fixed-bottom transparent">
  <a className="navbar-brand" href="/">
  <img src={logo} className="App-logo" alt="logo" ></img>
  <span>Powered by ReactJS</span>
  </a>
</nav>

    );
}

  
export default Footer;