import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const testimonials = [
    {
      id: 1,
      name: "Carlos Silva",
      car: "Honda Civic 2020",
      text: "Serviço excepcional! Meu carro ficou impecável, o polimento removeu todas as marcas e a pintura ficou brilhando como nunca. Recomendo demais!",
      rating: 5,
      image: "/images/user2.png"
    },
    {
      id: 2,
      name: "Marcos reis",
      car: "Toyota Corolla 2019",
      text: "A higienização interna superou minhas expectativas. Removeram até manchas antigas dos bancos. Profissionalismo nota 10!",
      rating: 5,
      image: "/images/user2.png"
    },
    {
      id: 3,
      name: "João Oliveira",
      car: "Jeep Compass 2021",
      text: "Fiz a vitrificação e estou impressionado com a durabilidade. Depois de meses, o carro continua com aquele brilho intenso. Vale cada centavo!",
      rating: 5,
      image: "/images/user2.png"
    },
    {
      id: 4,
      name: "Ana Paula",
      car: "Hyundai HB20 2022",
      text: "Atendimento impecável e resultado surpreendente! A lavagem técnica deixou meu carro novinho, até as rodas ficaram perfeitas. Super indico!",
      rating: 5,
      image: "/images/user2.png"
    }
  ];

  const scrollPrev = () => {
    emblaApi?.scrollPrev();
  };

  const scrollNext = () => {
    emblaApi?.scrollNext();
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <span 
            className="testimonials-tag"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            DEPOIMENTOS
          </span>
          <h2 
            className="testimonials-title"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            O Que Nossos <span className="highlight">Clientes Dizem</span>
          </h2>
          <p 
            className="testimonials-description"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            A satisfação dos nossos clientes é nossa maior conquista. 
            Veja o que eles têm a dizer sobre nossos serviços.
          </p>
        </div>

        <div 
          className="testimonials-carousel"
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="embla__slide">
                  <div className="testimonial-card">
                    <div className="testimonial-header">
                      <div className="testimonial-avatar">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          onError={(e) => {
                            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23FFD700"%3E%3Cpath d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/%3E%3C/svg%3E';
                          }}
                        />
                      </div>
                      <div className="testimonial-info">
                        <h3 className="testimonial-name">{testimonial.name}</h3>
                        <p className="testimonial-car">{testimonial.car}</p>
                      </div>
                    </div>
                    
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star"></i>
                      ))}
                    </div>

                    <p className="testimonial-text">
                      "{testimonial.text}"
                    </p>

                    <div className="testimonial-quote-icon">
                      <i className="fas fa-quote-right"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="carousel-button carousel-button-prev"
            aria-label="Anterior"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={scrollNext}
            className="carousel-button carousel-button-next"
            aria-label="Próximo"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="testimonials-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className="dot"
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;