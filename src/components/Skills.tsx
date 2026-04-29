const cats = [
  { title: 'Languages',     icon: '{ }', skills: ['Core PHP','HTML5','CSS3','JavaScript','jQuery','Liquid (Shopify)','TypeScript'] },
  { title: 'WordPress',     icon: 'WP',  skills: ['Custom Theme Dev','Theme Customisation','WooCommerce','Elementor','WPBakery','Gutenberg'] },
  { title: 'Shopify',       icon: 'SH',  skills: ['Store Setup & Config','Custom Liquid Themes','App Integration','Checkout Optimisation','Payment Gateways'] },
  { title: 'Modern Stack',  icon: '▲',   skills: ['Next.js','React','Vercel','GitHub','Custom Code','Responsive Design'] },
  { title: 'SEO & Performance', icon: '⚡', skills: ['Technical SEO','SEO Strategy','Google PageSpeed','GTmetrix','SEMrush','Schema Markup','Core Web Vitals'] },
  { title: 'Tools & Hosting',   icon: '🛠', skills: ['Git','WP Rocket','LiteSpeed Cache','Query Monitor','Google Analytics','SSL Config','Security Hardening'] },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-bg-pattern" />
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Technical Skills</div>
          <div className="section-label-line" />
        </div>
        <h2 className="section-title reveal delay-1">WHAT I<br />BRING TO THE TABLE</h2>
        <div className="skills-grid">
          {cats.map((cat, i) => (
            <div className={`skill-category reveal delay-${(i % 3) + 1}`} key={cat.title}>
              <div className="skill-cat-header">
                <div className="skill-cat-icon">{cat.icon}</div>
                <div className="skill-cat-title">{cat.title}</div>
              </div>
              <div className="skill-tags">
                {cat.skills.map((s, j) => (
                  <span className="skill-tag" key={s} style={{ animationDelay: `${j * 0.05}s` }}>{s}</span>
                ))}
              </div>
              <div className="skill-card-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
