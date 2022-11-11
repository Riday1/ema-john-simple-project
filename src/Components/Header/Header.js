import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='navHeader'>
            <img src={logo} alt="" />
            <div>
                <a href="/Shop">Shop</a>
                <a href="/Home">Home</a>
                <a href="/About">About</a>
                <a href="/Contact">Contact</a>
            </div>
        </nav>
    );
};

export default Header;