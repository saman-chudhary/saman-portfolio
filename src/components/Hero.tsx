'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  return (
    <section className="hero" id="home">
      <div className="hero-grid" />
      <div className="hero-glow" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            Available for freelance projects
          </div>
          <h1 className="hero-name" ref={titleRef}>
            SAMAN
            <span>CHUDHARY</span>
          </h1>
          <p className="hero-title">
            Senior WordPress &amp; Shopify Developer
          </p>
          <p className="hero-desc">
            Crafting high-performance e-commerce and corporate websites for
            international clients across the USA, Canada, and Saudi Arabia —
            with obsessive attention to speed, security, and conversion.
          </p>
          <div className="hero-actions">
            <a href="#experience" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-outline">Get In Touch</a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="stat-num">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div>
              <div className="stat-num">60+</div>
              <div className="stat-label">Sites Delivered</div>
            </div>
            <div>
              <div className="stat-num">90%</div>
              <div className="stat-label">Client Retention</div>
            </div>
            <div>
              <div className="stat-num">50%</div>
              <div className="stat-label">Avg Load Time ↓</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
