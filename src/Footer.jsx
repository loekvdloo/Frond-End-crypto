import React from 'react';

function Footer() {
    return (
        // de footer
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Crypto Dashboard. All rights reserved.</p>
            <div className="footer-links">
                <a href="https://www.coindesk.com/" target="_blank" rel="noopener noreferrer">Coindesk API</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </footer>
    );
}

export default Footer;
