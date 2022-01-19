import React from 'react';
import '../styles/Footer.css';
import githubImage from '../images/Github.png';

function Footer() {
    return (
        <div className="footer-container">
            <div className="my-profiles">
                <a href="https://github.com/suraj-sanwal/netflix-clone"><img src={githubImage} alt="Github" /></a>
                <a href=""><img src="" /></a>
            </div>
            <p>Created by Suraj Sanwal</p>
        </div>
    )
}

export default Footer;