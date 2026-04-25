'use client'
import { useState } from 'react'

const projects = [
  {
    category: 'WordPress',
    items: [
      {
        title: 'Neuronics USA',
        type: 'Corporate Website',
        description: 'Custom WordPress theme development with advanced SEO optimization, performance tuning, and WooCommerce integration for a US-based tech client.',
        tags: ['WordPress', 'Custom Theme', 'SEO', 'WooCommerce'],
        image: 'https://saman-chudhary.github.io/my-portfolio/img/port1.jpg',
        metrics: '+25% organic traffic',
      },
      {
        title: 'York Garrison Canada',
        type: 'Corporate Website',
        description: 'Full WordPress website build with custom PHP theme, responsive design, and technical SEO strategy delivering page 1 rankings for target keywords.',
        tags: ['WordPress', 'PHP', 'Responsive', 'Technical SEO'],
        image: 'https://saman-chudhary.github.io/my-portfolio/img/port2.jpg',
        metrics: 'Page 1 Rankings',
      },
      {
        title: 'SIT Digital Canada',
        type: 'Business Website',
        description: 'Custom WordPress development with Elementor, WooCommerce integration, security hardening and automated backup systems for a Canadian digital agency.',
        tags: ['WordPress', 'Elementor', 'Security', 'WooCommerce'],
        image: 'https://saman-chudhary.github.io/my-portfolio/img/port3.jpg',
        metrics: '40% fewer revisions',
      },
      {
        title: 'Tree Digital Insurance',
        type: 'Insurance Portal',
        description: 'WordPress insurance portal for Saudi Arabia market with custom forms, multilingual support, performance optimization achieving 45% better PageSpeed scores.',
        tags: ['WordPress', 'Custom Forms', 'Performance', 'PHP'],
        image: 'https://saman-chudhary.github.io/my-portfolio/img/port4.jpg',
        metrics: '+45% PageSpeed Score',
      },
    ],
  },
  {
    category: 'Shopify',
    items: [
      {
        title: 'Youth Engine Labs',
        type: 'E-Commerce Store',
        description: 'Full Shopify store setup with custom Liquid theme development, payment gateway integration, and checkout flow optimization resulting in increased conversions.',
        tags: ['Shopify', 'Liquid', 'Payment Gateway', 'Checkout'],
        image: 'https://api.screenshotmachine.com/?key=demo&url=https://youthenginelabs.com&dimension=1280x800&zoom=100&device=desktop&format=jpg&delay=2000',
        liveUrl: 'https://youthenginelabs.com',
        metrics: '+22% conversion rate',
      },
      {
        title: 'Costa Rican Coffee Trading',
        type: 'E-Commerce Store',
        description: 'Shopify e-commerce store for premium coffee brand with custom Liquid theme, product catalog structuring, upsell apps integration and brand-aligned design.',
        tags: ['Shopify', 'Liquid Theme', 'E-Commerce', 'Branding'],
        image: 'https://api.screenshotmachine.com/?key=demo&url=https://costaricancoffeetrading.co&dimension=1280x800&zoom=100&device=desktop&format=jpg&delay=2000',
        liveUrl: 'https://costaricancoffeetrading.co',
        metrics: '+20% store revenue',
      },
      {
        title: 'Subtle Snacks',
        type: 'E-Commerce Store',
        description: 'Custom Shopify store with tailored Liquid theme, subscription model integration, custom pricing rules and mobile-first responsive design for snack brand.',
        tags: ['Shopify', 'Subscriptions', 'Custom Pricing', 'Mobile-First'],
        image: 'https://api.screenshotmachine.com/?key=demo&url=https://subtlesnacks.com&dimension=1280x800&zoom=100&device=desktop&format=jpg&delay=2000',
        liveUrl: 'https://subtlesnacks.com',
        metrics: '30% faster launch',
      },
    ],
  },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState('WordPress')

  const activeProjects = projects.find(p => p.category === activeTab)?.items || []

  return (
    <section id="projects">
      <div className="container">
        <div className="section-label">Portfolio</div>
        <h2 className="section-title">SELECTED<br />PROJECTS</h2>

        {/* Tab switcher */}
        <div style={{
          display: 'flex',
          gap: '0',
          marginTop: '3rem',
          borderBottom: '1px solid var(--border)',
        }}>
          {projects.map(p => (
            <button
              key={p.category}
              onClick={() => setActiveTab(p.category)}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: activeTab === p.category ? '2px solid var(--accent)' : '2px solid transparent',
                color: activeTab === p.category ? 'var(--accent)' : 'var(--text-muted)',
                fontFamily: 'var(--mono-font)',
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '1rem 2rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                marginBottom: '-1px',
              }}
            >
              {p.category} ({projects.find(x => x.category === p.category)?.items.length})
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1px',
          background: 'var(--border)',
          border: '1px solid var(--border)',
          marginTop: '2rem',
        }}>
          {activeProjects.map((project) => (
            <div
              key={project.title}
              style={{
                background: 'var(--bg)',
                transition: 'background 0.2s',
                overflow: 'hidden',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--surface)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg)')}
            >
              {/* Screenshot */}
              <div style={{
                width: '100%',
                height: '220px',
                overflow: 'hidden',
                position: 'relative',
                borderBottom: '1px solid var(--border)',
                background: 'var(--surface-2)',
              }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={e => ((e.target as HTMLImageElement).style.transform = 'scale(1.05)')}
                  onMouseLeave={e => ((e.target as HTMLImageElement).style.transform = 'scale(1)')}
                  onError={e => {
                    const el = e.target as HTMLImageElement
                    el.style.display = 'none'
                    const parent = el.parentElement!
                    parent.style.display = 'flex'
                    parent.style.alignItems = 'center'
                    parent.style.justifyContent = 'center'
                    parent.innerHTML = `<span style="font-family:var(--mono-font);font-size:0.65rem;color:var(--text-muted);letter-spacing:0.1em">${project.title.toUpperCase()}</span>`
                  }}
                />
                {/* Metric badge */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'var(--accent)',
                  color: '#000',
                  fontFamily: 'var(--mono-font)',
                  fontSize: '0.6rem',
                  fontWeight: '500',
                  letterSpacing: '0.1em',
                  padding: '0.3rem 0.7rem',
                }}>
                  {project.metrics}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '1.75rem' }}>
                <div style={{
                  fontFamily: 'var(--mono-font)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: '0.5rem',
                }}>
                  {project.type}
                </div>
                <h3 style={{
                  fontFamily: 'var(--heading-font)',
                  fontSize: '1.5rem',
                  letterSpacing: '0.05em',
                  color: 'var(--text)',
                  marginBottom: '0.75rem',
                }}>
                  {project.title}
                </h3>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  lineHeight: '1.7',
                  marginBottom: '1.25rem',
                }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{
                      fontFamily: 'var(--mono-font)',
                      fontSize: '0.6rem',
                      padding: '0.25rem 0.6rem',
                      border: '1px solid var(--border)',
                      color: 'var(--text-dim)',
                      letterSpacing: '0.1em',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
                {'liveUrl' in project && (
                  <a
                    href={(project as any).liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: 'var(--mono-font)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      borderBottom: '1px solid var(--accent)',
                      paddingBottom: '2px',
                      transition: 'opacity 0.2s',
                    }}
                  >
                    View Live Site →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
