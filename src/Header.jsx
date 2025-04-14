import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        // de header
        <header className="header">
            <div className="logo-container">
                <h1 className="title">Crypto Dashboard</h1>
            </div>
            <nav className="nav">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorieten</Link>
            </nav>
        </header>
    );
}

export default Header;
