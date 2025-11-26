import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const WHATSAPP_LINK = "https://wa.me/5582991617862";
  const INSTAGRAM_LINK = "https://instagram.com/auto.brilho_al";
  

  return (
    <footer className="footer" data-aos="fade-up" data-aos-duration="800">
      <div className="footer-container">
        <div className="footer-content">
          {/* Coluna 1 - Sobre */}
          <div className="footer-column">
            <div className="footer-logo">
              <img
                src="/images/logo.png"
                alt="Auto Brilho Logo"
                className="footer-logo-img"
              />
              <span className="footer-logo-text">Auto Brilho ✨</span>
            </div>
            <p className="footer-description">
              Transformando seu veículo com os melhores serviços de estética
              automotiva em Coruripe. Qualidade, dedicação e resultados
              impecáveis.
            </p>
            <div className="footer-social">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
         
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon whatsapp"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div className="footer-column">
            <h3 className="footer-title">Links Rápidos</h3>
            <ul className="footer-links">
              <li>
                <a href="#home">Início</a>
              </li>
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#services">Serviços</a>
              </li>
              <li>
                <a href="#results">Resultados</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Serviços */}
          <div className="footer-column">
            <h3 className="footer-title">Nossos Serviços</h3>
            <ul className="footer-links">
              <li>
                <a href="#polimento">Polimento Técnico</a>
              </li>
              <li>
                <a href="#vitrificacao">Vitrificação</a>
              </li>
              <li>
                <a href="#higienizacao">Higienização Interna</a>
              </li>
              <li>
                <a href="#lavagem">Lavagem Técnica</a>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Contato */}
          <div className="footer-column">
            <h3 className="footer-title">Contato</h3>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>
                  Rua Lindolfo Simões, 177
                  <br />
                  Coruripe - AL, 57500-000
                </span>
              </li>
              <li>
                <i className="fas fa-phone-alt"></i>
                <span>+55 82 99999-9999</span>
              </li>
              <li>
                <i className="fas fa-clock"></i>
                <span>
                  Seg - Sex: 9h às 18h
                  <br />
                  Sábado: 9h às 13h
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha Inferior */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} <strong>Auto Brilho</strong>. Todos os direitos
              reservados.
            </p>
            <p className="footer-developer">
              Desenvolvido por{" "}
              <a
                href="https://i9criacaodesite.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                I9 Criação de Site
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
