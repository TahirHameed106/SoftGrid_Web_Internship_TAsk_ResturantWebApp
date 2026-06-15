import { Link } from 'react-router-dom';
import { featuredDishes } from '../../data/dishes';
import useScrollReveal from '../../hooks/useScrollReveal';
import './FeaturedDishes.css';

export default function FeaturedDishes() {
  const [ref, visible] = useScrollReveal();

  return (
    <section ref={ref} className={`section featured ${visible ? 'is-visible' : ''}`}>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Tonight's Picks</span>
          <h2 className="section-title">Featured Dishes</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            A small taste of what comes out of our wood-fired kitchen every night.
          </p>
        </div>

        <div className="featured__grid">
          {featuredDishes.map((dish) => (
            <article key={dish.id} className="dish-card">
              <div className="dish-card__image">
                <img src={dish.image} alt={dish.name} loading="lazy" />
              </div>
              <div className="dish-card__body">
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
                <span className="price-tag">${dish.price}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="featured__cta">
          <Link to="/menu" className="btn btn-primary">View Full Menu</Link>
        </div>
      </div>
    </section>
  );
}