import React from 'react';
import logo from './logo.svg';
import nytimes_logo from './nytimes_logo.png';
import "./Footer.css";
  
const Footer = () => {
    return(

<nav id="footer" className="navbar fixed-bottom">
  <a className="navbar-brand text-white" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
  <img src={logo} className="App-logo" alt="logo"></img>
  <span>Powered by ReactJS</span>
  </a>
  <a href="http://developer.nytimes.com/" target="_blank" rel="noopener noreferrer">
  <img src={nytimes_logo} alt="nyt logo"></img>
  </a>
</nav>

    );
}

  
export default Footer;