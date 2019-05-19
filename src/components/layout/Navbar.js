import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper white">
            <div className="container">
                <Link to="/" className="brand-logo black-text">Trampos das Comunidades</Link>
                <ul className="right">
                    <li><a className="black-text" href="https://github.com/felipegs07/dev-jobs-community" target="_blank" rel="noopener noreferrer">Sobre</a></li>
                </ul>
            </div>
        </nav>
        
    )
}

export default Navbar;