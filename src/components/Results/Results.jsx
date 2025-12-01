import React, { useState } from "react";
import "./Results.css";

const Results = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const results = [
    {
      id: 1,
      type: "image-split",
      category: "higienizacao",
      title: "Higienização Completa",
      splitImage: "/images/higi01.jpeg",
      description:
        "Nossa higienização interna devolve a sensação de carro novo",
    },
    {
      id: 2,
      type: "video",
      category: "vitrificacao",
      title: "Vitrificação",
      videoUrl: "/images/vitri1.mp4",
      thumbnail: "/images/vitrificacao2.jpeg",
      description: "Proteção com produtos premium de alta qualidade",
    },
    {
      id: 3,
      type: "image",
      category: "polimento",
      title: "Polimento Técnico",
      beforeImage: "/images/poli1.jpeg",
      afterImage: "/images/poli2.jpeg",
      description: "Remoção de riscos e restauração do brilho original",
    },

    {
      id: 4,
      type: "video",
      category: "polimento",
      title: "No Padrão!",
      videoUrl: "/images/padrao.mp4",
      thumbnail: "/images/polimento-thumb-1.jpg",
      description: "Processo completo de polimento",
    },
    {
      id: 5,
      type: "image",
      category: "polimento",
      title: "Polimento Técnico",
      beforeImage: "/images/motobefore.jpeg",
      afterImage: "/images/motoafter.jpeg",
      description: "Remoção de riscos e restauração do brilho original",
    },

    {
      id: 6,
      type: "video",
      category: "vitrificacao",
      title: "Vitrificação",
      videoUrl: "/images/vitrific.mp4",
      thumbnail: "/images/vitrificacao1.jpeg",
      description:
        "Protege de forma eficiente e duradoura a superfície da pintura",
    },
  ];

  const filters = [
    { id: "all", label: "Todos" },
    { id: "polimento", label: "Polimento" },
    { id: "vitrificacao", label: "Vitrificação" },
    { id: "higienizacao", label: "Higienização" },
    { id: "lavagem", label: "Lavagem" },
  ];

  const filteredResults =
    activeFilter === "all"
      ? results
      : results.filter((result) => result.category === activeFilter);

  return (
    <section className="results" id="results">
      <div className="results-container">
        <div className="results-header">
          <span className="results-tag">NOSSOS RESULTADOS</span>
          <h2 className="results-title">
            Veja a <span className="highlight">Transformação</span> dos Veículos
          </h2>
          <p className="results-description">
            Confira o antes e depois dos nossos trabalhos. Cada detalhe importa
            e o resultado fala por si só.
          </p>
        </div>

        <div className="results-filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${
                activeFilter === filter.id ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="results-grid">
          {filteredResults.map((result) => (
            <div key={result.id} className={`result-card ${result.type}`}>
              {result.type === "image" ? (
                <div className="before-after-container">
                  <div className="before-after-slider">
                    <div className="before-image">
                      <img
                        src={result.beforeImage}
                        alt={`${result.title} - Antes`}
                      />
                      <span className="label label-before">ANTES</span>
                    </div>
                    <div className="after-image">
                      <img
                        src={result.afterImage}
                        alt={`${result.title} - Depois`}
                      />
                      <span className="label label-after">DEPOIS</span>
                    </div>
                  </div>
                </div>
              ) : result.type === "image-split" ? (
                <div className="image-split-wrapper">
                  <div className="image-split-top">
                    <img
                      src={result.splitImage}
                      alt={`${result.title} - Depois`}
                    />
                    <span className="split-label split-after">DEPOIS</span>
                  </div>
                  <div className="image-split-bottom">
                    <img
                      src={result.splitImage}
                      alt={`${result.title} - Antes`}
                    />
                    <span className="split-label split-before">ANTES</span>
                  </div>
                  <div className="split-divider"></div>
                </div>
              ) : (
                <div className="video-container">
                  <video controls poster={result.thumbnail} preload="metadata">
                    <source src={result.videoUrl} type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                </div>
              )}

              <div className="result-info">
                <h3 className="result-title">{result.title}</h3>
                <p className="result-description">{result.description}</p>
                <span className="result-category">
                  {filters.find((f) => f.id === result.category)?.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="results-cta">
          <h3>Quer resultados assim no seu carro?</h3>
          <a
            href="https://wa.me/558291199086?text=Olá! Vi os resultados no site e quero agendar um serviço!"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
          >
            Agendar Agora no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Results;
