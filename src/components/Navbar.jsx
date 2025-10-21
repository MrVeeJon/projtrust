import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '../assets/projtrust-logo.png'; // make sure your logo is here

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goto = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false); // close menu after clicking
  };

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav-inner">
        {/* BRAND LOGO */}
        <div
          className="brand"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={logo} alt="ProjTrust Logo" className="brand-logo" />
        </div>

        {/* HAMBURGER ICON (Visible on Mobile) */}
        <div
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* NAVIGATION LINKS */}
        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <button className="link" onClick={() => goto('about')}>
            About
          </button>
          <button className="link" onClick={() => goto('services')}>
            Services
          </button>
          <button className="link" onClick={() => goto('process')}>
            Process
          </button>
          <button className="link" onClick={() => goto('contact')}>
            Contact
          </button>
          <button className="btn btn-primary" onClick={() => goto('contact')}>
            Start Project
          </button>
        </nav>
      </div>
    </header>
  );
}
