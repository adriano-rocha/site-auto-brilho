import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <img 
            src="/images/logo.png" 
            alt="Auto Shine Logo" 
            className="logo"
          />
          <span className="logo-text">Auto Brilho ✨</span>
        </div>
        
        <nav className="header-nav">
          <a href="#home">Início</a>
          <a href="#about">Sobre</a>
          <a href="#services">Serviços</a>
          <a href="#results">Resultados</a>          
          <a href="#contact">Contato</a>
        </nav>

        <div 
          className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={closeMobileMenu}>Início</a>
          <a href="#about" onClick={closeMobileMenu}>Sobre</a>
          <a href="#services" onClick={closeMobileMenu}>Serviços</a>
          <a href="#results" onClick={closeMobileMenu}>Resultados</a>
          <a href="#locations" onClick={closeMobileMenu}>Localizações</a>
          <a href="#contact" onClick={closeMobileMenu}>Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;