import React, { useState } from 'react';
import './Results.css';

const Results = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const results = [
    {
      id: 1,
      type: 'image',
      category: 'polimento',
      title: 'Polimento Técnico - Civic',
      beforeImage: '/images/polimento-before-1.jpg',
      afterImage: '/images/polimento-after-1.jpg',
      description: 'Remoção de riscos e restauração do brilho original'
    },
    {
      id: 2,
      type: 'image',
      category: 'vitrificacao',
      title: 'Vitrificação - Corolla',
      beforeImage: '/images/vitrificacao-before-1.jpg',
      afterImage: '/images/vitrificacao-after-1.jpg',
      description: 'Proteção duradoura com acabamento espelhado'
    },
    {
      id: 3,
      type: 'video',
      category: 'higienizacao',
      title: 'Higienização Completa',
      videoUrl: '/videos/higienizacao-1.mp4',
      thumbnail: '/images/higienizacao-thumb-1.jpg',
      description: 'Limpeza profunda de interior e banco de couro'
    },
    {
      id: 4,
      type: 'image',
      category: 'lavagem',
      title: 'Lavagem Técnica - SUV',
      beforeImage: '/images/lavagem-before-1.jpg',
      afterImage: '/images/lavagem-after-1.jpg',
      description: 'Limpeza detalhada de rodas e para-choques'
    },
    {
      id: 5,
      type: 'video',
      category: 'polimento',
      title: 'Polimento em Ação',
      videoUrl: '/videos/polimento-1.mp4',
      thumbnail: '/images/polimento-thumb-1.jpg',
      description: 'Processo completo de polimento'
    },
    {
      id: 6,
      type: 'image',
      category: 'vitrificacao',
      title: 'Vitrificação - Fusca',
      beforeImage: '/images/vitrificacao-before-2.jpg',
      afterImage: '/images/vitrificacao-after-2.jpg',
      description: 'Proteção e brilho intenso em pintura clássica'
    }
  ];

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'polimento', label: 'Polimento' },
    { id: 'vitrificacao', label: 'Vitrificação' },
    { id: 'higienizacao', label: 'Higienização' },
    { id: 'lavagem', label: 'Lavagem' }
  ];

  const filteredResults = activeFilter === 'all' 
    ? results 
    : results.filter(result => result.category === activeFilter);

  return (
    <section className="results" id="results">
      <div className="results-container">
        <div className="results-header">
          <span className="results-tag">NOSSOS RESULTADOS</span>
          <h2 className="results-title" data-aos="fade-down">
            Veja a <span className="highlight">Transformação</span> dos Veículos
          </h2>
          <p className="results-description">
            Confira o antes e depois dos nossos trabalhos. Cada detalhe importa 
            e o resultado fala por si só.
          </p>
        </div>

        {/* Filtros */}
        <div className="results-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid de Resultados */}
        <div className="results-grid">
          {filteredResults.map(result => (
            <div key={result.id} className={`result-card ${result.type}`}>
              {result.type === 'image' ? (
                <div className="before-after-container">
                  <div className="before-after-slider">
                    <div className="before-image">
                      <img src={result.beforeImage} alt={`${result.title} - Antes`} />
                      <span className="label label-before">ANTES</span>
                    </div>
                    <div className="after-image">
                      <img src={result.afterImage} alt={`${result.title} - Depois`} />
                      <span className="label label-after">DEPOIS</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="video-container">
                  <video 
                    controls 
                    poster={result.thumbnail}
                    preload="metadata"
                  >
                    <source src={result.videoUrl} type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                  <div className="play-icon">
                    <i className="fas fa-play"></i>
                  </div>
                </div>
              )}
              
              <div className="result-info">
                <h3 className="result-title">{result.title}</h3>
                <p className="result-description">{result.description}</p>
                <span className={`result-category category-${result.category}`}>
                  {filters.find(f => f.id === result.category)?.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="results-cta">
          <h3>Quer resultados assim no seu carro?</h3>
          <a
            href="https://wa.me/5582999999999?text=Olá! Vi os resultados no site e quero agendar um serviço!"
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