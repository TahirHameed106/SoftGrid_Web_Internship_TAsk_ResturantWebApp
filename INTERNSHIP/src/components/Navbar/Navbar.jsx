// src/components/Navbar/Navbar.jsx
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

const navLinks = [
  { label: 'Home',    path: '/' },
  { label: 'Menu',    path: '/menu' },
  { label: 'About',   path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <div className="container navbar__inner">

        {/* Brand */}
        <NavLink to="/" className="navbar__brand" onClick={() => setIsOpen(false)}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C9 6 7 8 7 12a5 5 0 0010 0c0-1.5-.5-2.5-1.5-3.5C16 10 15 12 13.5 12c1-2-1-4-1.5-10z"
              fill="#D4A24E" />
          </svg>
          <span>Ember &amp; Oak</span>
        </NavLink>

        {/* Desktop links */}
        <nav className={`navbar__links ${isOpen ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) => `navbar__link ${isActive ? 'is-active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="navbar__reserve" onClick={() => setIsOpen(false)}>
            Reserve
          </NavLink>
        </nav>

        {/* Right controls */}
        <div className="navbar__controls">
          {/* Theme toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              /* Moon icon */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            ) : (
              /* Sun icon */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1"  x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22"  y1="4.22"  x2="5.64"  y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1"  y1="12" x2="3"  y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36" />
                <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>

          {/* Hamburger */}
          <button
            className={`navbar__toggle ${isOpen ? 'is-open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((p) => !p)}
          >
            <span /><span /><span />
          </button>
        </div>

      </div>
    </header>
  );
}