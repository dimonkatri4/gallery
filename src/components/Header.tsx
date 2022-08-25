import React from 'react';
import {AppBar} from "@mui/material";
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <>
            <AppBar sx={
                {
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: '#C8E6C9',
                    position: 'static',
                    borderRadius: '0 0 10px 10px'
                }
            }>
                <img src={logo} alt='logo' style={{height: '70px', width: '200px', padding: '5px'}}/>
            </AppBar>

        </>
    );
};

export default Header;