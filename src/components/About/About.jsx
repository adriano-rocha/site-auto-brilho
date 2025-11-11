import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-images">
          <div className="about-image-large">
            <img src="/images/polimento-1.jpg" alt="Polimento Profissional" />
          </div>
          <div className="about-images-small">
            <img src="/images/interior-1.jpg" alt="Limpeza Interior" />
            <img src="/images/farol-1.jpg" alt="Restauração Faróis" />
          </div>
          <div className="about-badge">
            <span className="badge-number">5+</span>
            <span className="badge-text">Anos de Experiência</span>
          </div>
        </div>

        <div className="about-content">
          <div className="about-header">
            <span className="about-tag">ESTÉTICA AUTOMOTIVA EM CORURIPE</span>
            <h2 className="about-title"
            data-aos="fade-up">
              Estética Automotiva<br />
              Auto <span className="highlight">Brilho</span>
            </h2>
            <p className="about-description">
              Com anos de experiência no mercado de estética automotiva em Coruripe, Profissional altamente 
              qualificado, (os melhores produtos do mercado), 
              tudo pronto para cuidar do seu carro com 
              o mais alto padrão de qualidade.
            </p>
          </div>

          <div className="about-features">
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-car-side"></i>
              </div>
              <div className="feature-content">
                <h3>Serviços de Qualidade</h3>
                <p>Nossos serviços incluem desde limpeza e higienização de interiores até polimento e vitrificação.</p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <div className="feature-content">
                <h3>Melhor Preço</h3>
                <p>oferecemos os melhores serviços por um preço acessível.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;