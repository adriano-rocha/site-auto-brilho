import React, { useState, useEffect } from 'react';
import './WhatsAppFloat.css';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const WHATSAPP_NUMBER = '558291199086';
  const MESSAGE = encodeURIComponent('Olá! Gostaria de mais informações sobre os serviços de estética automotiva.');
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`;

  useEffect(() => {
    // Mostra o botão após 2 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`whatsapp-float ${isVisible ? 'visible' : ''}`}>
      {/* Tooltip */}
      <div className="whatsapp-tooltip">
        <span className="tooltip-text">Fale conosco!</span>
        <div className="tooltip-arrow"></div>
      </div>

      {/* Botão Principal */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        aria-label="Falar no WhatsApp"
      >
        <img 
          src="/images/whats.png" 
          alt="WhatsApp" 
          className="whatsapp-icon"
        />
        
        {/* Círculos de Pulso */}
        <span className="whatsapp-pulse pulse-1"></span>
        <span className="whatsapp-pulse pulse-2"></span>
        
        {/* Badge de Notificação */}
        <span className="whatsapp-badge">1</span>
      </a>
    </div>
  );
};

export default WhatsAppFloat;