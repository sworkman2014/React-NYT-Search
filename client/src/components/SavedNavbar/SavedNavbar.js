import React from 'react';
import nyt_logo from "./nyt_logo.png";
import "./SavedNavbar.css";


const SavedNavbar = () => {
    return(
        <nav id="app-title" className="navbar transparent">
            <a className="navbar-brand text-white" href="/">
            <a href= "http://developer.nytimes.com" target="_blank" rel="noopener noreferrer">
                <img id="nyt-logo" src={nyt_logo} width="30" height="30" className="d-inline-block align-top" alt=""></img>
                </a>
            New York Times Article Search
            </a>
            <form className="form-inline">
            <button className="btn btn-primary"><a className="saved-article-link text-white" href="/">Search Articles</a></button>
            </form>
        </nav>       
    )
}
export default SavedNavbar;