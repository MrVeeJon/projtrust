import React, { useState, useEffect } from 'react';
import './navbar.css'; // we'll create this small file inline below or you can append styles in App.css

export default function Navbar(){
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=> {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return ()=> window.removeEventListener('scroll', onScroll);
  },[]);

  const goto = (id) => {
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  };

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav-inner">
        <div className="brand" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
          <div className="logo-mark">PT</div>
          <div className="brand-text">
            <div className="brand-title">ProjTrust</div>
            <div className="brand-sub">Trust the Process. See the Progress.</div>
          </div>
        </div>

        <nav className="nav-links">
          <button className="link" onClick={() => goto('about')}>About</button>
          <button className="link" onClick={() => goto('services')}>Services</button>
          <button className="link" onClick={() => goto('process')}>Process</button>
          <button className="link" onClick={() => goto('contact')}>Contact</button>
          <button className="btn btn-primary" onClick={() => goto('contact')}>Start Project</button>
        </nav>
      </div>
    </header>
  );
}
