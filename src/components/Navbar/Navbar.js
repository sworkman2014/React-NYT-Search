import React from 'react'
import "./Navbar.css";


const NavBar = () => {
    return(
        <nav id="app-title" className="navbar transparent">
            <a className="navbar-brand" href="/">
                <img src="poweredby_nytimes_30a.png" width="30" height="30" className="d-inline-block align-top" alt=""></img>
            New York Times Article Search
            </a>
            <form className="form-inline">
            <button className="btn btn-outline-light"><a className="saved-article-link" href="/saved">Saved Articles</a></button>
            </form>
        </nav>       
    )
}
export default NavBar;