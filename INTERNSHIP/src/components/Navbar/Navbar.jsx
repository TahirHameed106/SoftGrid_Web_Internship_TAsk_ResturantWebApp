import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__brand" onClick={() => setIsOpen(false)}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C9 6 7 8 7 12a5 5 0 0010 0c0-1.5-.5-2.5-1.5-3.5C16 10 15 12 13.5 12c1-2-1-4-1.5-10z"
              fill="#D4A24E" />
          </svg>
          <span>Ember &amp; Oak</span>
        </NavLink>

        <nav className={`navbar__links ${isOpen ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="navbar__cta price-tag" onClick={() => setIsOpen(false)}>
            Reserve
          </NavLink>
        </nav>

        <button
          className={`navbar__toggle ${isOpen ? 'is-open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}