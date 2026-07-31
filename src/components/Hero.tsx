'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="hero-float hero-float-1">WordPress</div>
      <div className="hero-float hero-float-2">Shopify</div>
      <div className="hero-float hero-float-3">Next.js</div>
      <div className="hero-float hero-float-4">WooCommerce</div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-status-dot" />
            <span>Available for freelance projects</span>
            <span className="hero-eyebrow-line" />
          </div>

          <h1 className="hero-name">
            <span className="hero-name-line">
              {['S','A','M','A','N'].map((l, i) => (
                <span key={i} className="hero-letter" style={{ animationDelay: `${i * 0.06}s` }}>{l}</span>
              ))}
            </span>
            <span className="hero-name-line hero-name-accent">
              {['C','H','U','D','H','A','R','Y'].map((l, i) => (
                <span key={i} className="hero-letter" style={{ animationDelay: `${(i + 5) * 0.06}s` }}>{l}</span>
              ))}
            </span>
          </h1>

          <div className="hero-role-wrap">
            <span className="hero-role-bar" />
            <p className="hero-subtitle">Senior WordPress &amp; Shopify Developer</p>
          </div>

          <p className="hero-desc">
            Crafting high-performance e-commerce and corporate websites for
            international clients across the <em>USA, Canada, and Saudi Arabia</em> —
            with obsessive attention to speed, security, and conversion.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              <span>View My Work</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#contact" className="btn-outline">Get In Touch</a>
          </div>

          <div className="hero-stats">
            {[
              { num: '5+', label: 'Years Experience' },
              { num: '60+', label: 'Sites Delivered' },
              { num: '90%', label: 'Client Retention' },
              { num: '50%', label: 'Load Time ↓' },
            ].map((s, i) => (
              <div className="hero-stat" key={s.label} style={{ animationDelay: `${0.8 + i * 0.1}s` }}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
