const exps = [
  {
    company: 'SMCSE Solutions',
    role: 'Senior WordPress & Shopify Developer',
    period: 'Nov 2023 — Present',
    location: 'Lahore, Pakistan',
    achievements: [
      'Architected and delivered <strong>20+ custom WordPress websites</strong> from scratch — cutting client revision cycles by 40%.',
      'Built and launched <strong>5+ Shopify stores</strong> end-to-end with custom Liquid theme development — increasing conversions by 22%.',
      'Boosted organic traffic by <strong>25% for three clients</strong> through technical SEO best practices and performance improvements.',
      'Increased average <strong>Google PageSpeed scores by 35%</strong> through advanced caching and PHP-level refactoring.',
      'Secured 100% of managed websites through monthly security audits, SSL config, and automated backups.',
    ],
  },
  {
    company: 'Freelance',
    role: 'Senior WordPress & Shopify Developer',
    period: 'Jul 2023 — Present',
    location: 'Remote — USA, Canada, Saudi Arabia',
    achievements: [
      'Grew client retention rate to <strong>90%</strong> delivering fully responsive WooCommerce stores and custom PHP WordPress themes.',
      'Improved SEO rankings to <strong>Page 1 for 5+ keywords per client</strong> via technical SEO overhauls and schema markup.',
      'Reduced average website load time by <strong>50%</strong> via JS optimisation, CSS minification, and server-side PHP tuning.',
      'Delivered 100% of projects on deadline across three time zones managing hosting, security, and staging workflows.',
    ],
  },
  {
    company: 'RF Studio',
    role: 'WordPress & Shopify Developer',
    period: 'Mar 2020 — Jul 2023',
    location: 'Islamabad, Pakistan',
    achievements: [
      'Designed and maintained <strong>30+ WordPress websites</strong> using Elementor, WPBakery, HTML5, CSS3 — reducing bounce rates by 30%.',
      'Set up and configured <strong>8+ Shopify stores</strong> end-to-end including payment gateways, shipping rules, and Liquid theme customisation.',
      'Boosted Shopify conversion rates by <strong>20% for three clients</strong> by redesigning checkout flows and integrating upsell apps.',
      'Improved average PageSpeed scores by <strong>45%</strong> through caching, image compression, and code efficiency.',
    ],
  },
]
export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="reveal"><div className="section-label">Work Experience</div></div>
        <h2 className="section-title reveal delay-1">WHERE I&apos;VE<br />MADE AN IMPACT</h2>
        <div className="exp-list">
          {exps.map((exp, i) => (
            <div className={`exp-item reveal delay-${i + 1}`} key={exp.company}>
              <div>
                <div className="exp-company">{exp.company}</div>
                <div className="exp-period">{exp.period}</div>
                <div className="exp-location">{exp.location}</div>
                <div className="exp-role">{exp.role}</div>
              </div>
              <ul className="exp-achievements">
                {exp.achievements.map((a, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: a }} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
