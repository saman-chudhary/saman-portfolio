'use client'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-logo">
        <span className="nav-logo-text">SAMAN</span>
        <span className="nav-logo-dot" />
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {['About','Skills','Experience','Projects','Clients','Contact'].map(link => (
          <li key={link}><a href={`#${link.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{link}</a></li>
        ))}
      </ul>
      <div className="nav-right">
        <a href="mailto:samanchudhary12345@gmail.com" className="nav-cta">Hire Me</a>
        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
        </button>
      </div>
    </nav>
  )
}
