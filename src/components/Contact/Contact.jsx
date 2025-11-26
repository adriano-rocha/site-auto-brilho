import React from 'react';
import './Contact.css';

const Contact = () => {
  const WHATSAPP_NUMBER = '5582991617862';
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de mais informações sobre os serviços de estética automotiva.`;
  const INSTAGRAM_LINK = 'https://instagram.com/auto.brilho_al';
  const ADDRESS = 'Rua Lindolfo Simões, 177, Coruripe - AL, 57500-000';
  const PHONE = '+55 82 99161-7862';

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <span className="contact-tag">FALE CONOSCO</span>
          <h2 className="contact-title" data-aos="fade-up">
            Entre em <span className="highlight">Contato</span>
          </h2>
          <p className="contact-description">
            Estamos prontos para atender você e cuidar do seu veículo com excelência. 
            Entre em contato através dos nossos canais.
          </p>
        </div>

        <div className="contact-content">
          {/* Coluna Esquerda - Informações */}
          <div className="contact-info">
            
            {/* WhatsApp - Destaque */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card whatsapp-card"
            >
              <div className="card-icon whatsapp-icon">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className="card-content">
                <h3>WhatsApp - Atendimento Rápido</h3>
                <p>{PHONE}</p>
                <span className="card-arrow">→</span>
              </div>
            </a>

            {/* Endereço */}
            <div className="contact-card">
              <div className="card-icon address-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="card-content">
                <h3>Nosso Endereço</h3>
                <p>{ADDRESS}</p>
              </div>
            </div>

            {/* Instagram */}
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card instagram-card"
            >
              <div className="card-icon instagram-icon">
                <i className="fab fa-instagram"></i>
              </div>
              <div className="card-content">
                <h3>Instagram</h3>
                <p>@auto.brilho_al</p>
                <span className="card-arrow">→</span>
              </div>
            </a>

            {/* Telefone */}
            <div className="contact-card">
              <div className="card-icon phone-icon">
                <i className="fas fa-phone-alt"></i>
              </div>
              <div className="card-content">
                <h3>Telefone</h3>
                <p>{PHONE}</p>
              </div>
            </div>

            {/* Horário de Atendimento */}
            <div className="contact-card schedule-card">
              <div className="card-icon schedule-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="card-content">
                <h3>Horário de Atendimento</h3>
                <div className="schedule-list">
                  <p><strong>Segunda a Sexta:</strong> 9h às 18h</p>
                  <p><strong>Sábado:</strong> 9h às 13h</p>
                  <p className="closed"><strong>Domingo:</strong> Fechado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita - Mapa */}
          <div className="contact-map">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.123456789!2d-36.17!3d-10.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDA3JzQ4LjAiUyAzNsKwMTAnMTIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Auto Brilho"
              ></iframe>
            </div>

            {/* Badge de Localização */}
            <div className="map-badge">
              <div className="badge-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="badge-info">
                <span className="badge-title">Estamos em Coruripe</span>
                <span className="badge-subtitle">Rua Lindolfo Simões, 177</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="contact-cta">
          <h3>Pronto para transformar seu veículo?</h3>
          <p>Entre em contato agora e agende seu horário!</p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            <i className="fab fa-whatsapp"></i>
            Agendar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
