import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <img
          src="/images/image-hero.jpg"
          alt="Estética Automotiva"
          className="hero-bg-image"
          data-aos="zoom-in"
          data-aos-duration="1500"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-container">
          <div className="hero-text">
            <h1
              className="hero-title"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Seu Carro novo <span className="highlight">de novo! </span>
            </h1>
            <p
              className="hero-subtitle"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Transformamos seu veículo com os melhores serviços de estética
              automotiva. Polimento,Higienização, vitrificação, lavagem
              detalhada e muito mais.
            </p>
            <div
              className="hero-buttons"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
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
