import React from 'react';
import './Header.css'; // Import your CSS file for styling

const Header = ({ isNavExpanded }) => {
  return (
    <header className={`header shadow-sm ${isNavExpanded ? 'header-expanded' : ''}`}>
      <div className="logo">
      <img src="/attendance logo.png" alt="" className="img-logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
