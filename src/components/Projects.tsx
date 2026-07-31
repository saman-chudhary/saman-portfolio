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
    tags: ['WordPress', 'Custom Theme', 'SEO', 'WooCommerce'],
    metric: '+35% PageSpeed',
    url: 'https://rutford.com',
    img: '/projects/rutford.webp',
  },
  {
    title: 'Nevski Exotics',
    type: 'E-Commerce Website',
    desc: 'Custom WordPress e-commerce site for an exotic car dealership with Elementor, WooCommerce and performance-focused build.',
    tags: ['WordPress', 'WooCommerce', 'Elementor', 'Custom Theme'],
    metric: '+30% Organic Traffic',
    url: 'https://nevskiexotics.co.uk',
    img: '/projects/nevskiexotics.webp',
  },
  {
    title: 'CHUI Data Analytics',
    type: 'Tech / SaaS Website',
    desc: 'Professional WordPress site for a data analytics firm with custom design, technical SEO and GTmetrix-optimised performance.',
    tags: ['WordPress', 'Elementor', 'Technical SEO', 'Performance'],
    metric: 'Page 1 Rankings',
    url: 'https://chuidataanalytics.com',
    img: '/projects/chuidataanalytics.webp',
  },
  {
    title: 'California Aesthetics',
    type: 'Medical / Beauty',
    desc: 'Custom WordPress site for a medical aesthetics clinic with appointment forms, SEO strategy and security hardening.',
    tags: ['WordPress', 'PHP', 'Custom Forms', 'Security'],
    metric: '+40% Organic Traffic',
    url: 'https://californiaaesthetics.co',
    img: '/projects/californiaaesthetics.webp',
  },
  {
    title: 'Capital Goose',
    type: 'Financial Platform',
    desc: 'WordPress financial platform with custom theme, secure hosting management, SSL configuration and schema markup.',
    tags: ['WordPress', 'Custom Theme', 'Schema', 'SSL'],
    metric: '+45% PageSpeed',
    url: 'https://capitalgoose.io',
    img: '/projects/capitalgoose.webp',
  },
  {
    title: 'Mark Jellison Coaching',
    type: 'Coaching / Personal Brand',
    desc: 'Personal brand WordPress site for a life coach with custom Elementor design, lead capture forms, and performance optimisation.',
    tags: ['WordPress', 'Elementor', 'Lead Forms', 'Branding'],
    metric: '90% Client Retention',
    url: 'https://markjellisoncoaching.com',
    img: '/projects/markjellisoncoaching.webp',
  },
]

const shopifyProjects: Project[] = [
  {
    title: 'Youth Engine Labs',
    type: 'Shopify E-Commerce',
    desc: 'Full Shopify store with custom Liquid theme, payment gateway integration and checkout optimisation — 22% conversion boost.',
    tags: ['Shopify', 'Liquid Theme', 'Payment Gateway', 'Checkout'],
    metric: '+22% Conversions',
    url: 'https://youthenginelabs.com',
    img: '/projects/youthenginelabs.webp',
  },
  {
    title: 'Costa Rican Coffee Trading',
    type: 'Shopify E-Commerce',
    desc: 'Premium coffee brand Shopify store with custom Liquid theme, product catalogue structuring and revenue-aligned upsell apps.',
    tags: ['Shopify', 'Liquid', 'Upsell Apps', 'Branding'],
    metric: '+20% Revenue',
    url: 'https://costaricancoffeetrading.co',
    img: '/projects/costaricancoffeetrading.webp',
  },
  {
    title: 'Subtle Snacks',
    type: 'Shopify E-Commerce',
    desc: 'Custom Shopify store with Liquid theme, subscription model, custom pricing rules and mobile-first responsive design.',
    tags: ['Shopify', 'Subscriptions', 'Custom Pricing', 'Mobile-First'],
    metric: '30% Faster Launch',
    url: 'https://subtlesnacks.com',
    img: '/projects/subtlesnacks.webp',
  },
]

const nextjsProjects: Project[] = [
  {
    title: 'Siteforge',
    type: 'AI Website Builder (SaaS)',
    desc: 'AI-powered website builder that generates complete, SEO-ready business sites in under 60 seconds, with booking, analytics and custom domains.',
    tags: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    metric: '12,400+ Sites Built',
    url: 'https://siteforge-builder.vercel.app/',
    img: '/projects/siteforge.webp',
  },
  {
    title: 'HostCrown',
    type: 'Web Hosting Platform',
    desc: 'Marketing and pricing site for an NVMe-backed hosting provider covering shared, VPS and dedicated plans with a live uptime status board.',
    tags: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    metric: '99.9% Uptime SLA',
    url: 'https://hostcrown.vercel.app/',
    img: '/projects/hostcrown.webp',
  },
  {
    title: 'Notekeeper',
    type: 'AI Productivity Tool',
    desc: 'AI meeting-notes app that turns a raw transcript into a clean summary, key decisions and action items in one click.',
    tags: ['Next.js', 'React', 'AI Integration', 'TypeScript'],
    metric: 'Instant Summaries',
    url: 'https://meeting-notes-ai-ten.vercel.app/',
    img: '/projects/notekeeper.webp',
  },
  {
    title: 'Origen Labs',
    type: 'E-Commerce Website',
    desc: 'Conversion-focused D2C storefront for a NAD+ longevity supplement brand, with an ingredient breakdown, science section and checkout.',
    tags: ['Next.js', 'E-Commerce', 'React', 'Vercel'],
    metric: 'D2C Storefront',
    url: 'https://origen-labs.vercel.app/',
    img: '/projects/origenlabs.webp',
  },
  {
    title: 'Fitcheck',
    type: 'AI Resume Matcher',
    desc: 'AI resume scanner that scores a resume against a job post, flags missing keywords and rewrites bullet points to match.',
    tags: ['Next.js', 'React', 'AI Integration', 'TypeScript'],
    metric: 'AI Match Scoring',
    url: 'https://resume-matcher-ai-xi.vercel.app/',
    img: '/projects/fitcheck.webp',
  },
  {
    title: 'GrowthMint',
    type: 'Agency Website',
    desc: 'Full-scale marketing site for an AI, software and digital agency, covering development and marketing services, portfolio and testimonials.',
    tags: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    metric: '500+ Clients Served',
    url: 'https://growthmint-zeta.vercel.app/',
    img: '/projects/growthmint.webp',
  },
  {
    title: 'AITools.directory',
    type: 'Directory / Listings Site',
    desc: 'Searchable directory of AI tools organised by category, with featured picks, ratings and pricing for each listed tool.',
    tags: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    metric: '200+ Tools Indexed',
    url: 'https://ai-tools-directory-alpha-eight.vercel.app/',
    img: '/projects/aitoolsdirectory.webp',
  },
  {
    title: 'Veloxa',
    type: 'E-Commerce / Rentals',
    desc: 'Buy-or-rent storefront for a bike shop with real-time rental booking, a product catalogue and dealer locations.',
    tags: ['Next.js', 'E-Commerce', 'React', 'TypeScript'],
    metric: 'Real-Time Booking',
    url: 'https://veloxa-inky.vercel.app/',
    img: '/projects/veloxa.webp',
  },
]

function PCard({ project, index }: { project: Project; index: number }) {
  return (
    <div className="pcard pcard-animated" style={{ animationDelay: `${index * 80}ms` }}>
      <div className="pcard-img">
        <img
          src={project.img}
          alt={`${project.title} website screenshot`}
          width={1280}
          height={800}
          loading="eager"
          decoding="async"
          onError={(e) => {
            const el = e.currentTarget
            // Try .png if .jpg failed, then .webp
            if (el.src.endsWith('.jpg')) {
              el.src = el.src.replace('.jpg', '.png')
            } else if (el.src.endsWith('.png')) {
              el.src = el.src.replace('.png', '.webp')
            }
          }}
        />
        <div className="pcard-badge">{project.metric}</div>
      </div>
      <div className="pcard-body">
        <div className="pcard-type">{project.type}</div>
        <div className="pcard-title">{project.title}</div>
        <div className="pcard-desc">{project.desc}</div>
        <div className="pcard-tags">
          {project.tags.map(t => (
            <span className="pcard-tag" key={t}>{t}</span>
          ))}
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

const projectsByTab = {
  WordPress: wpProjects,
  Shopify: shopifyProjects,
  'Next.js': nextjsProjects,
} as const

export default function Projects() {
  const [tab, setTab] = useState<keyof typeof projectsByTab>('WordPress')
  const list = projectsByTab[tab]

  return (
    <section id="projects">
      <div className="container">
        <div className="reveal"><div className="section-label">Portfolio</div></div>
        <h2 className="section-title reveal delay-1">SELECTED<br />PROJECTS</h2>
        <div className="projects-tabs reveal delay-2">
          {(['WordPress', 'Shopify', 'Next.js'] as const).map(t => (
            <button
              key={t}
              className={`ptab${tab === t ? ' active' : ''}`}
              onClick={() => setTab(t)}
            >
              {t} ({projectsByTab[t].length})
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {list.map((p, i) => (
            <PCard key={`${tab}-${p.title}`} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
