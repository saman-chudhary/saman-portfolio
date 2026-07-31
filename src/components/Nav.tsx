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

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = '/Saman_Chudhary_CV.pdf'
    link.download = 'Saman_Chudhary_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

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
        <button onClick={handleDownloadCV} className="nav-cta nav-cta-btn">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight:'5px',verticalAlign:'middle'}}>
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download CV
        </button>
        <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
          <span className={menuOpen ? 'open' : ''} />
        </button>
      </div>
    </nav>
  )
}
