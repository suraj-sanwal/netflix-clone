import React from 'react';
import logo from '../images/Netflix-Logo.png';
import '../styles/Navbar.css';

function Navbar() {
    return(
        <nav className='navbar'>
            <div className='container'>
            <div className='logo'>
                <img src={logo} />
            </div>
            </div>
        </nav>
    )
}

export default Navbar;