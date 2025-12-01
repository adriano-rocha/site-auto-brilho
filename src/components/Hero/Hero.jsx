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
            data-aos="zoom-out"
            data-aos-duration="2000"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="hero-container">
            <div className="hero-text">
              <h1
                className="hero-title"
                data-aos="fade-down"
                data-aos-delay="300"
                data-aos-duration="1000"
              >
                Padrão <span className="highlight">Novo de Novo! </span>
              </h1>
              <p
                className="hero-subtitle"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
              >
                Transformamos seu veículo com os melhores serviços de estética
                automotiva. Polimento,Higienização, vitrificação, lavagem
                detalhada e muito mais.
              </p>
              <div
                className="hero-buttons"
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-duration="1000"
              >
                <a href="#services" className="btn btn-primary">
                  Nossos Serviços
                </a>
                <a
                  href="https://wa.me/558291199086?text=Olá! Gostaria de mais informações sobre os serviços de estética automotiva."
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