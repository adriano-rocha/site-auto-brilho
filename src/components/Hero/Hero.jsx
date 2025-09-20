import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <img src="/images/image-hero.jpg" alt="Estética Automotiva" className="hero-bg-image" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-container">
          <div className="hero-text">
            <h1 className="hero-title">
              Seu Carro <span className="highlight">Impecável</span>
            </h1>
            <p className="hero-subtitle">
              Transformamos seu veículo com os melhores serviços de estética automotiva. 
              Polimento,higienização, vitrificação, lavagem detalhada e muito mais.
            </p>
            <div className="hero-buttons">
              <a href="#services" className="btn btn-primary">
                Nossos Serviços
              </a>
              <a 
                href="https://wa.me/5582999999999?text=Olá! Gostaria de mais informações sobre os serviços de estética automotiva." 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;