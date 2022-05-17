import React from 'react';
import { Fragment } from 'react';
import {AppBar,Toolbar,iconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';



const Header = () =>{


    return(

        <AppBar position="fixed" style={{backgroundColor: '#2f2f2f', boxShadow:'none', padding: '10px 0px'}}>

        <Toolbar> 
        
        </Toolbar>
           <div className="header_logo">
             <div className="font_righteous header_logo_venue">The Venue</div>
           </div>
        </AppBar>
    )
}

export default Header;