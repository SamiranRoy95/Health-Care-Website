import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from "./useAuth";
import "./Header.css";


const Header = () => {
    const {user,logOut}=useAuth();
    
    return (
        <div className="header">
            <div className="header__logo__div">
                <Link className="header__logo" to="/">
                <h1>Health-Care</h1>
                </Link>
            </div>
            <div>
            <Link className="header__link" to="/home">
            Home
            </Link>
            <Link className="header__link" to="/services">
            Services
            </Link>
            <Link className="header__link" to="/about">
                About
            </Link>
            <Link className="header__link" to="/contact">
            Contact
            </Link>
            
            {user?.email?
            <button onClick={logOut}>logout</button>:

                
                <Link className="header__link" to="/login">
            Login
            </Link>
            }
            <span>{user?.displayName}</span>
            </div>
        </div>
    )
}

export default Header
