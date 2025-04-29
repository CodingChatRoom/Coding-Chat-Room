import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-container">
      <header className="header">
        <h2 className="logo-name">CodingChatRoom</h2>

        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/About" className="nav-link">About</Link></li>
            <li><Link to="/Tools" className="nav-link">Tools</Link></li>
            <li><Link to="/Learn" className="nav-link">Learn</Link></li>
            <li><Link to="/Creator" className="nav-link">Creator</Link></li>
          </ul>
        </nav>

        {/* Burger Icon for Mobile */}
        <div className={`burger-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </header>
    </div>
  );
}

export default Header;
