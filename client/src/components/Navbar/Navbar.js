import React from 'react';
import nyt_logo from "./nyt_logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

          <Link className="nav-link" to="/saved">Saved Articles</Link>


const NavBar = () => {
    return(
        <nav id="app-title" className="navbar transparent">
            <a className="navbar-brand text-white" href="/">
            <a href= "http://developer.nytimes.com" target="_blank" rel="noopener noreferrer">
                <img id="nyt-logo" src={nyt_logo} width="30" height="30" className="d-inline-block align-top" alt=""></img>
                </a>
            New York Times Article Search
            </a>
            <form className="form-inline">
            <Link className="nav-link" to="/saved">Saved Articles</Link>

            <button className="btn btn-primary"><a className="saved-article-link text-white" href="/saved">Saved Articles</a></button>
            </form>
        </nav>       
    )
}
export default NavBar;