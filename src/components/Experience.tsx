const experiences = [
  {
    company: 'SMCSE Solutions',
    role: 'Senior WordPress & Shopify Developer',
    period: 'Nov 2023 — Present',
    location: 'Lahore, Pakistan',
    achievements: [
      'Architected and delivered <strong>20+ custom WordPress websites</strong> from scratch using Core PHP, HTML5, CSS3, JavaScript, and jQuery — cutting client revision cycles by 40%.',
      'Built and launched <strong>5+ Shopify stores</strong> end-to-end, including custom Liquid theme development and payment gateway integration — increasing average conversion rates by 22%.',
      'Boosted organic traffic by <strong>25% for three clients</strong> through technical SEO best practices and on-page performance improvements.',
      'Increased average <strong>Google PageSpeed scores by 35%</strong> through advanced caching, image optimisation, and PHP-level code refactoring.',
      'Secured 100% of managed websites against known vulnerabilities through monthly security audits, SSL config, and automated backup systems.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Senior WordPress & Shopify Developer',
    period: 'Jul 2023 — Present',
    location: 'Remote — USA, Canada, Saudi Arabia',
    achievements: [
      'Grew client retention rate to <strong>90%</strong> by delivering fully responsive WooCommerce stores and custom PHP WordPress themes that precisely matched brand and business logic.',
      'Improved SEO rankings to <strong>page 1 for 5+ target keywords per client</strong>, as tracked by SEMrush, through technical SEO overhauls and schema markup.',
      'Reduced average website load time by <strong>50%</strong>, as measured by GTmetrix, through JS/jQuery optimisation, CSS3 minification, and server-side PHP tuning.',
      'Delivered 100% of projects on deadline across three time zones while managing hosting, security hardening, and staging workflows independently.',
    ],
  },
  {
    company: 'RF Studio',
    role: 'WordPress & Shopify Developer',
    period: 'Mar 2020 — Jul 2023',
    location: 'Islamabad, Pakistan',
    achievements: [
      'Designed and maintained <strong>30+ WordPress websites</strong> using Elementor, WPBakery, HTML5, CSS3, and Core PHP — reducing bounce rates by 30% through improved UX and mobile-first design.',
      'Set up and configured <strong>8+ Shopify stores</strong> end-to-end, including payment gateways, shipping rules, and custom Liquid theme customisation.',
      'Boosted Shopify store conversion rates by <strong>20% for three clients</strong> by redesigning checkout flows and integrating revenue-aligned upsell apps.',
      'Improved average PageSpeed scores by <strong>45%</strong> through caching, image compression, and code efficiency across all projects.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-label">Work Experience</div>
        <h2 className="section-title">WHERE I'VE<br />MADE AN IMPACT</h2>
        <div className="exp-list">
          {experiences.map((exp) => (
            <div className="exp-item" key={exp.company}>
              <div className="exp-meta">
                <div className="exp-company">{exp.company}</div>
                <div className="exp-period">{exp.period}</div>
                <div className="exp-location">{exp.location}</div>
                <div className="exp-role">{exp.role}</div>
              </div>
              <div className="exp-content">
                <ul className="exp-achievements">
                  {exp.achievements.map((a, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: a }} />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
