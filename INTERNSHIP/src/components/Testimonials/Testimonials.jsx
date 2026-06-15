import { useState, useEffect } from 'react';
import { testimonials } from '../../data/testimonials';
import useScrollReveal from '../../hooks/useScrollReveal';
import './Testimonials.css';

export default function Testimonials() {
  const [ref, visible] = useScrollReveal();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goTo = (index) => setActive(index);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((p) => (p + 1) % testimonials.length);

  const current = testimonials[active];

  return (
    <section ref={ref} className={`section testimonials ${visible ? 'is-visible' : ''}`}>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Guest Stories</span>
          <h2 className="section-title">What Our Guests Say</h2>
        </div>

        <div className="testimonial-card">
          <span className="testimonial-card__quote-mark">&ldquo;</span>
          <p className="testimonial-card__quote">{current.quote}</p>

          <div className="testimonial-card__rating" aria-label={`${current.rating} out of 5 stars`}>
            {'★'.repeat(current.rating)}{'☆'.repeat(5 - current.rating)}
          </div>

          <div className="testimonial-card__author">
            <img src={current.avatar} alt={current.name} />
            <div>
              <strong>{current.name}</strong>
              <span>{current.role}</span>
            </div>
          </div>
        </div>

        <div className="testimonials__controls">
          <button onClick={prev} aria-label="Previous testimonial">‹</button>
          <div className="testimonials__dots">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                className={`dot ${i === active ? 'is-active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} aria-label="Next testimonial">›</button>
        </div>
      </div>
    </section>
  );
}