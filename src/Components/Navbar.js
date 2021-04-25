import React from 'react'
import './Navbar.css'
/*
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
*/
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo-section">
                <a href="">Logo</a>
            </div>
            <div className="navigation-section">
                <ul>
                    <li><a href="" className="active">Home</a></li>
                    <li><a href="">About us</a></li>
                    <li><a href="">Contact us</a></li>
                    
                </ul>
                {/* 
                <Button
                    variant="contained"
                    color="primary"
                    className="login-register-btn"
                    startIcon={<AccountCircleIcon />}
                >
                        Login/Register
                </Button>
                */}
            </div>
        </div>
    )
}
