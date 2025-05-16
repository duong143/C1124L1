import React from 'react';
import './Navbar.css'

function Navbar({ links }) {
    return (
       <nav className="navbar">
            {links.map((link, index) => (
        <a key={index} href="#" className="nav-link">
            {link}
        </a>
    ))}
</nav>

    );
}

export default Navbar;
