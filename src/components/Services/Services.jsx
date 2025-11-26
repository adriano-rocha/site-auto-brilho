import React from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      id: "polimento",
      title: "Polimento Técnico",
      description:
        "Corrige defeitos e imperfeições que se encontram na superfície da pintura do veículo",
      image: "/images/poli_auto1.png",
      buttonText: "Saiba Mais",
    },
    {
      id: "vitrificacao",
      title: "Vitrificação",
      description:
        "Protege de forma eficiente e duradoura a superfície da pintura",
      image: "/images/vitri.png",
      buttonText: "Saiba Mais",
    },
    {
      id: "higienizacao",
      title: "Higienização Interna",
      description:
        "Nossa higienização interna devolve a sensação de carro novo",
      image: "/images/higienizacao.png",
      buttonText: "Saiba Mais",
    },
    {
      id: "lavagem",
      title: "Lavagem Técnica",
      description:
        "Eliminamos com eficiência, sujeiras em rodas e caixas de rodas, regiões de difícil acesso",
      image: "/images/wash.jpg",
      buttonText: "Saiba Mais",
    },
  ];

  const handleWhatsClick = () => {
    const message = "Olá! Gostaria de saber mais sobre o serviço.";
    const phone = "5582991617862";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <span
            className="services-tag"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            NOSSOS SERVIÇOS
          </span>
          <h2
            className="services-title"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Principais Serviços de{" "}
            <span className="highlight">Estética Automotiva</span>
          </h2>
          <p
            className="services-description"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Nossos serviços incluem desde Lavagem, Limpeza e higienização de
            Interiores, Polimento, Vitrificação de pintura e muito mais.
            Trabalhamos com as melhores marcas e produtos do mercado para
            garantir que o resultado final seja simplesmente impecável.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-card"
              data-aos="flip-left"
              data-aos-delay={index * 150}
              data-aos-duration="1000"
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-overlay"></div>
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <button className="service-btn" onClick={handleWhatsClick}>
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div
          className="services-cta"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <a
            href="https://wa.me/5582991617862?text=Olá! Gostaria de mais informações sobre os serviços de estética automotiva."
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
