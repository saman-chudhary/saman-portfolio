'use client'
import { useState } from 'react'

type Project = {
  title: string
  type: string
  desc: string
  tags: string[]
  metric: string
  url?: string
  img: string
}

const wpProjects: Project[] = [
  {
    title: 'Rutford',
    type: 'Corporate Website',
    desc: 'Custom WordPress theme development with advanced SEO, performance tuning and WooCommerce integration.',
    tags: ['WordPress','Custom Theme','SEO','WooCommerce'],
    metric: '+35% PageSpeed',
    url: 'https://rutford.com',
    img: 'https://api.microlink.io/?url=https%3A%2F%2Frutford.com&screenshot=true&meta=false&embed=screenshot.url',
  },
  {
    title: 'Discount Pools Online',
    type: 'E-Commerce Site',
    desc: 'Full WooCommerce store with custom PHP theme, payment gateway, performance optimisation and mobile-first design.',
    tags: ['WordPress','WooCommerce','PHP','Mobile-First'],
    metric: '+22% Conversions',
    url: 'https://discountpoolsonline.com',
    img: 'https://api.microlink.io/?url=https%3A%2F%2Fdiscountpoolsonline.com&screenshot=true&meta=false&embed=screenshot.url',
  },
  {
    title: 'CHUI Data Analytics',
    type: 'Tech / SaaS Website',
    desc: 'Professional WordPress site for a data analytics firm with custom design, technical SEO and GTmetrix-optimised performance.',
    tags: ['WordPress','Elementor','Technical SEO','Performance'],
    metric: 'Page 1 Rankings',
    url: 'https://chuidataanalytics.com',
    img: 'https://api.microlink.io/?url=https%3A%2F%2Fchuidataanalytics.com&screenshot=true&meta=false&embed=screenshot.url',
  },
  {
    title: 'California Aesthetics',
    type: 'Medical / Beauty',
    desc: 'Custom WordPress site for a medical aesthetics clinic with appointment forms, SEO strategy and security hardening.',
    tags: ['WordPress','PHP','Custom Forms','Security'],
    metric: '+40% Organic Traffic',
    url: 'https://californiaaesthetics.co',
    img: 'https://api.microlink.io/?url=https%3A%2F%2Fcaliforniaaesthetics.co&screenshot=true&meta=false&embed=screenshot.url',
  },
  {
    title: 'Capital Goose',
    type: 'Financial Platform',
    desc: 'WordPress financial platform with custom theme, secure hosting management, SSL configuration and schema markup.',
    tags: ['WordPress','Custom Theme','Schema','SSL'],
    metric: '+45% PageSpeed',
    url: 'https://capitalgoose.io',
    img: 'https://api.microlink.io/?url=https%3A%2F%2Fcapitalgoose.io&screenshot=true&meta=false&embed=screenshot.url',
  },
  {
    title: 'Mark Jellison Coaching',
    type: 'Coaching / Personal Brand',
    desc: 'Personal brand WordPress site for a life coach with custom Elementor design, lead capture forms, and performance optimisation.',
    tags: ['WordPress','Elementor','Lead Forms','Branding'],
    metric: '90% Client Retention',
    url: 'https://markjellisoncoaching.com',
    img: 'https://api.microlink.io/?url=https%3A%2F%2Fmarkjellisoncoaching.com&screenshot=true&meta=false&embed=screenshot.url',
  },
]

const shopifyProjects: Project[] = [
  {
    title: 'Youth Engine Labs',
    type: 'Shopify E-Commerce',
    desc: 'Full Shopify store with custom Liquid theme, payment gateway integration and checkout optimisation — 22% conversion boost.',
    tags: ['Shopify','Liquid Theme','Payment Gateway','Checkout'],
    metric: '+22% Conversions',
    url: 'https://youthenginelabs.com',
    img: 'https://api.microlink.io/?url=https%3A%2F%2Fyouthenginelabs.com&screenshot=true&meta=false&embed=screenshot.url',
  },
  {
    title: 'Costa Rican Coffee Trading',
    type: 'Shopify E-Commerce',
    desc: 'Premium coffee brand Shopify store with custom Liquid theme, product catalogue structuring and revenue-aligned upsell apps.',
    tags: ['Shopify','Liquid','Upsell Apps','Branding'],
    metric: '+20% Revenue',
    url: 'https://costaricancoffeetrading.co',
    img: 'https://api.microlink.io/?url=https%3A%2F%2Fcostaricancoffeetrading.co&screenshot=true&meta=false&embed=screenshot.url',
  },
  {
    title: 'Subtle Snacks',
    type: 'Shopify E-Commerce',
    desc: 'Custom Shopify store with Liquid theme, subscription model, custom pricing rules and mobile-first responsive design.',
    tags: ['Shopify','Subscriptions','Custom Pricing','Mobile-First'],
    metric: '30% Faster Launch',
    url: 'https://subtlesnacks.com',
    img: 'https://api.microlink.io/?url=https%3A%2F%2Fsubtlesnacks.com&screenshot=true&meta=false&embed=screenshot.url',
  },
]

function PCard({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="pcard reveal-scale">
      <div className="pcard-img">
        {!imgError ? (
          <img
            src={project.img}
            alt={project.title}
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="pcard-placeholder">
            <div className="pcard-placeholder-icon">🌐</div>
            <span className="pcard-placeholder-text">{project.title}</span>
            {project.url && <span className="pcard-placeholder-url">{project.url.replace('https://', '')}</span>}
          </div>
        )}
        <div className="pcard-badge">{project.metric}</div>
      </div>
      <div className="pcard-body">
        <div className="pcard-type">{project.type}</div>
        <div className="pcard-title">{project.title}</div>
        <div className="pcard-desc">{project.desc}</div>
        <div className="pcard-tags">
          {project.tags.map(t => <span className="pcard-tag" key={t}>{t}</span>)}
        </div>
        {project.url && (
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="pcard-link">
            View Live Site →
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const [tab, setTab] = useState<'WordPress' | 'Shopify'>('WordPress')
  const list = tab === 'WordPress' ? wpProjects : shopifyProjects

  return (
    <section id="projects">
      <div className="container">
        <div className="reveal"><div className="section-label">Portfolio</div></div>
        <h2 className="section-title reveal delay-1">SELECTED<br />PROJECTS</h2>

        <div className="projects-tabs reveal delay-2">
          {(['WordPress', 'Shopify'] as const).map(t => (
            <button
              key={t}
              className={`ptab${tab === t ? ' active' : ''}`}
              onClick={() => setTab(t)}
            >
              {t} ({t === 'WordPress' ? wpProjects.length : shopifyProjects.length})
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {list.map(p => <PCard key={p.title} project={p} />)}
        </div>
      </div>
    </section>
  )
}
