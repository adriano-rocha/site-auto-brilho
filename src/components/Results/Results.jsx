import React, { useState } from 'react';

const Results = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const results = [
    {
      id: 1,
      type: 'image',
      category: 'polimento',
      title: 'Polimento Técnico',
      beforeImage: '/images/poli1.jpeg',
      afterImage: '/images/poli2.jpeg',
      description: 'Remoção de riscos e restauração do brilho original'
    },
    {
      id: 2,
      type: 'image',
      category: 'vitrificacao',
      title: 'Vitrificação - T-Cross ',
      beforeImage: '/images/vitrificacao1.jpeg',
      afterImage: '/images/vitrificacao2.jpeg',
      description: 'Proteção duradoura com acabamento espelhado'
    },
    {
      id: 3,
      type: 'video',
      category: 'higienizacao',
      title: 'Higienização Completa',
      videoUrl: '/images/higi.mp4',
      thumbnail: '/images/higienizacao-thumb-1.jpg',
      description: 'Limpeza profunda de interior e banco de couro'
    },
    {
      id: 4,
      type: 'image',
      category: 'lavagem técnica + polimento',
      title: 'Lavagem Técnica - GSX650',
      beforeImage: '/images/motobefore.jpeg',
      afterImage: '/images/motoafter.jpeg',
      description: 'Limpeza detalhada de rodas e para-choques'
    },
    {
      id: 5,
      type: 'video',
      category: 'polimento',
      title: 'No Padrão!',
      videoUrl: '/images/padrao.mp4',
      thumbnail: '/images/polimento-thumb-1.jpg',
      description: 'Processo completo de polimento'
    },
    {
      id: 6,
      type: 'image',
      category: 'vitrificacao',
      title: 'Vitrificação - Farois',
      beforeImage: '/images/farolbefore.jpeg',
      afterImage: '/images/farolafter.jpeg',
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
    <section className="results" id="results" style={{
      padding: '80px 20px',
      backgroundColor: '#0a0a0a',
      color: '#fff'
    }}>
      <div className="results-container" style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div className="results-header" style={{
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          <span 
            className="results-tag"
            style={{
              display: 'inline-block',
              padding: '8px 20px',
              backgroundColor: 'rgba(255, 215, 0, 0.1)',
              color: '#ffd700',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '1px',
              marginBottom: '20px'
            }}
          >
            NOSSOS RESULTADOS
          </span>
          <h2 
            className="results-title"
            style={{
              fontSize: '42px',
              fontWeight: '700',
              marginBottom: '20px',
              lineHeight: '1.2'
            }}
          >
            Veja a <span style={{ color: '#ffd700' }}>Transformação</span> dos Veículos
          </h2>
          <p 
            className="results-description"
            style={{
              fontSize: '18px',
              color: '#aaa',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}
          >
            Confira o antes e depois dos nossos trabalhos. Cada detalhe importa 
            e o resultado fala por si só.
          </p>
        </div>

        {/* Filtros */}
        <div 
          className="results-filters"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '15px',
            marginBottom: '50px',
            flexWrap: 'wrap'
          }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
              style={{
                padding: '12px 30px',
                backgroundColor: activeFilter === filter.id ? '#ffd700' : 'transparent',
                color: activeFilter === filter.id ? '#000' : '#fff',
                border: '2px solid #ffd700',
                borderRadius: '25px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid de Resultados */}
        <div className="results-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '30px',
          marginBottom: '60px'
        }}>
          {filteredResults.map((result) => (
            <div 
              key={result.id} 
              className={`result-card ${result.type}`}
              style={{
                backgroundColor: '#151515',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                transition: 'transform 0.3s ease'
              }}
            >
              {result.type === 'image' ? (
                <div className="before-after-container" style={{
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div className="before-after-slider" style={{
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <div className="before-image" style={{
                      position: 'relative',
                      width: '100%'
                    }}>
                      <img 
                        src={result.beforeImage} 
                        alt={`${result.title} - Antes`}
                        style={{
                          width: '100%',
                          height: 'auto',
                          display: 'block'
                        }}
                      />
                      <span className="label label-before" style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        backgroundColor: 'rgba(255,0,0,0.8)',
                        color: '#fff',
                        padding: '5px 15px',
                        borderRadius: '5px',
                        fontSize: '12px',
                        fontWeight: '700'
                      }}>ANTES</span>
                    </div>
                    <div className="after-image" style={{
                      position: 'relative',
                      width: '100%'
                    }}>
                      <img 
                        src={result.afterImage} 
                        alt={`${result.title} - Depois`}
                        style={{
                          width: '100%',
                          height: 'auto',
                          display: 'block'
                        }}
                      />
                      <span className="label label-after" style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        backgroundColor: 'rgba(0,255,0,0.8)',
                        color: '#fff',
                        padding: '5px 15px',
                        borderRadius: '5px',
                        fontSize: '12px',
                        fontWeight: '700'
                      }}>DEPOIS</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="video-container" style={{
                  position: 'relative',
                  height: '300px',
                  backgroundColor: '#000'
                }}>
                  <video 
                    controls 
                    poster={result.thumbnail}
                    preload="metadata"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  >
                    <source src={result.videoUrl} type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                </div>
              )}
              
              <div className="result-info" style={{
                padding: '25px'
              }}>
                <h3 className="result-title" style={{
                  fontSize: '22px',
                  fontWeight: '700',
                  marginBottom: '10px',
                  color: '#fff'
                }}>{result.title}</h3>
                <p className="result-description" style={{
                  fontSize: '15px',
                  color: '#aaa',
                  marginBottom: '15px',
                  lineHeight: '1.5'
                }}>{result.description}</p>
                <span className={`result-category category-${result.category}`} style={{
                  display: 'inline-block',
                  padding: '6px 15px',
                  backgroundColor: 'rgba(255, 215, 0, 0.2)',
                  color: '#ffd700',
                  borderRadius: '15px',
                  fontSize: '13px',
                  fontWeight: '600'
                }}>
                  {filters.find(f => f.id === result.category)?.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div 
          className="results-cta"
          style={{
            textAlign: 'center',
            padding: '50px 20px',
            backgroundColor: '#151515',
            borderRadius: '15px'
          }}
        >
          <h3 style={{
            fontSize: '32px',
            fontWeight: '700',
            marginBottom: '25px'
          }}>Quer resultados assim no seu carro?</h3>
          <a
            href="https://wa.me/5582999999999?text=Olá! Vi os resultados no site e quero agendar um serviço!"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
            style={{
              display: 'inline-block',
              padding: '18px 40px',
              backgroundColor: '#25d366',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '30px',
              fontSize: '18px',
              fontWeight: '700',
              transition: 'all 0.3s ease',
              boxShadow: '0 5px 20px rgba(37, 211, 102, 0.3)'
            }}
          >
            Agendar Agora no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Results;