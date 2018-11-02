import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import "./Navbar.css";


const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
              <h1 id="app-title">New York Times Article Search</h1> 
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;