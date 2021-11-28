import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer__section">
           
            <div className="footer__logo">
                <Link className="footer__logo__link" to="/">
                <h1>Health-Care</h1>
                </Link>
               
            </div>
            <div className="footer__text">
                <h2>Our Information</h2>
                <ul>
                   <Link className="footer__link" to="/services">
                   <li>Services</li>
                   </Link>
                   <Link className="footer__link"to="about">
                   <li>About</li>
                   </Link>
                   <Link className="footer__link" to="contact">
                   <li>Contact</li>
                   </Link>
                    
                </ul>
            </div>
            <div className="footer__address">
                <h2>Our Address</h2>
               <p>Address:Hathazari ,Chittagong</p>
               <p>Phone:01855539876</p>
               <p>Email:abc100@gmail.com</p>
                
            </div>
            <div className="footer__about">
                <h2>About Us</h2>
                <p>
                    we are a great company.we provide to our patient great service.Our main purpose is 
                    to give a great treatment to our patient.
                </p>
            </div>
        </div>
    )
}

export default Footer
