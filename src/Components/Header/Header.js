import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='navHeader'>
            <img src={logo} alt="" />
            <div>
                <a href="/Shop">Shop</a>
                <a href="/Account">Account</a>
                <a href="/Info">Info</a>
                <a href="/Contact">Contact</a>
            </div>
        </nav>
    );
};

export default Header;