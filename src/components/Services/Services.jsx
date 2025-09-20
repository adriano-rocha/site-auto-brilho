import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      id: "polimento",
      title: "Polimento Técnico",
      description:
        "Corrige defeitos e imperfeições que se encontram na superfície da pintura do veículo",
      image: "/images/polimento-service.jpg",
      buttonText: "Saiba Mais",
    },
    {
      id: "vitrificacao",
      title: "Vitrificação",
      description:
        "Protege de forma eficiente e duradoura a superfície da pintura",
      image: "/images/vitrificacao-service.jpg",
      buttonText: "Saiba Mais",
    },
    {
      id: "higienizacao",
      title: "Higienização Interna",
      description:
        "Nossa higienização interna devolve a sensação de carro novo",
      image: "/images/higienizacao-service.jpg",
      buttonText: "Saiba Mais",
    },
    {
      id: "lavagem",
      title: "Lavagem Técnica",
      description:
        "Eliminamos com eficiência, sujeiras em rodas e caixas de rodas, regiões de difícil acesso",
      image: "/images/lavagem-service.jpg",
      buttonText: "Saiba Mais",
    },
  ];

  const handleServiceClick = (serviceId) => {
    // Scroll para a seção específica do serviço
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <span className="services-tag">NOSSOS SERVIÇOS</span>
          <h2 className="services-title">
            Principais Serviços de{" "}
            <span className="highlight">Estética Automotiva</span>
          </h2>
          <p className="services-description">
            Nossos serviços incluem desde Lavagem, Limpeza e higienização de
            Interiores, Polimento, Vitrificação de pintura e muito mais.
            Trabalhamos com as melhores marcas e produtos do mercado para
            garantir que o resultado final seja simplesmente impecável.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-overlay"></div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <button
                  className="service-btn"
                  onClick={() => handleServiceClick(service.id)}
                >
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <a
            href="https://wa.me/5582999999999?text=Olá! Gostaria de mais informações sobre os serviços de estética automotiva."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            Solicitar Orçamento no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
