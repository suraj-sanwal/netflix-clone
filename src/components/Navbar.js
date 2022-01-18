import React, {useState, useEffect} from 'react';
import logo from '../images/Netflix-Logo.png';
import '../styles/Navbar.css';

function Navbar() {
    const [ show, hidebackground] = useState([]);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 70) {
                hidebackground(true)
            } else {
                hidebackground(false)
            }
        });
        return () => {
            window.removeEventListener('scroll');
        }
    }, []);

    return(
        <nav className={`navbar ${show && "navbar_dark"}`}>
            <div className='container'>
            <div className='logo'>
                <img src={logo} />
            </div>
            </div>
        </nav>
    )
}

export default Navbar;