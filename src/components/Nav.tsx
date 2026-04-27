'use client'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-logo">SAMAN</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#clients">Clients</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="mailto:samanchudhary12345@gmail.com" className="nav-cta">Hire Me</a>
    </nav>
  )
}
