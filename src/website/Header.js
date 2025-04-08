// src/components/Header.jsx
import React from 'react';
import './Header.css';
import logoIcon from '../assets/no-bg-avatar.png';

const Header = () => {
  return (
    <header className="header__hero">
      <div className="logo__hero">
        <img src={logoIcon} alt="Logo" className="logo-icon__hero" />
        <span></span>
      </div>
      <a href="#demo" className="nav-link__hero">Try Demo</a>
    </header>
  );
};

export default Header;
