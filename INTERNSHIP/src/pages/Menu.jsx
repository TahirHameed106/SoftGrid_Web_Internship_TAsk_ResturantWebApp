// src/pages/Menu.jsx
import { useState, useMemo } from 'react';
import { menuItems, categories } from '../data/menuItems';
import useScrollReveal from '../hooks/useScrollReveal';
import './Menu.css';

/* ── Single dish card ──────────────────────────────────────── */
function DishCard({ item, index }) {
  return (
    <article
      className="dish-card"
      style={{ animationDelay: `${index * 0.07}s` }}
    >
      {item.badge && <span className="dish-card__badge">{item.badge}</span>}
      <div className="dish-card__image">
        <img src={item.image} alt={item.name} loading="lazy" />
        <span className="dish-card__category">{item.category}</span>
      </div>
      <div className="dish-card__body">
        <h3 className="dish-card__title">{item.name}</h3>
        <p className="dish-card__desc">{item.description}</p>
        <div className="dish-card__footer">
          <span className="price-tag">${item.price}</span>
          <button className="dish-card__add" aria-label={`Add ${item.name} to order`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5"  y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

/* ── Menu Page ─────────────────────────────────────────────── */
export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const [headerRef, headerVisible] = useScrollReveal(0.05);
  const [gridRef, gridVisible] = useScrollReveal(0.05);

  const filtered = useMemo(() => {
    return menuItems.filter((item) => {
      const matchCategory =
        activeCategory === 'All' || item.category === activeCategory;
      const matchSearch =
        search.trim() === '' ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <>
      {/* ── Page Header ─────────────────────────────────────── */}
      <section
        ref={headerRef}
        className={`page-header menu-header ${headerVisible ? 'is-visible' : ''}`}
      >
        <div className="container">
          <span className="eyebrow">What We Serve</span>
          <h1 className="section-title">Our Menu</h1>
          <p>Every dish is wood-fired, made to order, and built with locally sourced ingredients.</p>
          <div className="divider" />
        </div>
      </section>

      {/* ── Search + Filter ──────────────────────────────────── */}
      <section className="menu-controls section is-visible">
        <div className="container">

          {/* Search bar */}
          <div className="menu-search">
            <svg className="menu-search__icon" width="18" height="18" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search dishes…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="menu-search__input"
              aria-label="Search menu items"
            />
            {search && (
              <button
                className="menu-search__clear"
                onClick={() => setSearch('')}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          {/* Category pills */}
          <div className="menu-filters" role="tablist" aria-label="Filter by category">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`filter-pill ${activeCategory === cat ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ── Grid ────────────────────────────────────────────── */}
      <section
        ref={gridRef}
        className={`section menu-grid-section ${gridVisible ? 'is-visible' : ''}`}
      >
        <div className="container">
          {filtered.length > 0 ? (
            <>
              <p className="menu-count">
                Showing <strong>{filtered.length}</strong> item{filtered.length !== 1 ? 's' : ''}
                {activeCategory !== 'All' && ` in ${activeCategory}`}
                {search && ` matching "${search}"`}
              </p>
              <div className="menu-grid">
                {filtered.map((item, i) => (
                  <DishCard key={item.id} item={item} index={i} />
                ))}
              </div>
            </>
          ) : (
            <div className="menu-empty">
              <span>🍽️</span>
              <h3>No dishes found</h3>
              <p>Try a different search term or category.</p>
              <button
                className="btn btn-outline"
                onClick={() => { setSearch(''); setActiveCategory('All'); }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}