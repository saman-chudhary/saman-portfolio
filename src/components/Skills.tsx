const skillCategories = [
  {
    title: 'Languages',
    skills: ['Core PHP', 'HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Liquid (Shopify)'],
  },
  {
    title: 'WordPress',
    skills: ['Custom Theme Development', 'Theme Customisation', 'WooCommerce', 'Elementor', 'WPBakery', 'Gutenberg'],
  },
  {
    title: 'Shopify',
    skills: ['Store Setup & Config', 'Custom Liquid Themes', 'App Integration', 'Checkout Optimisation', 'Payment Gateways'],
  },
  {
    title: 'SEO & Performance',
    skills: ['Technical SEO', 'SEO Strategy', 'Google PageSpeed', 'GTmetrix', 'SEMrush', 'Schema Markup', 'Core Web Vitals'],
  },
  {
    title: 'Security & Hosting',
    skills: ['Security Hardening', 'Hosting Management', 'SSL Configuration', 'Automated Backups', 'Staging Environments', 'FTP/SFTP'],
  },
  {
    title: 'Tools & Analytics',
    skills: ['Git', 'WP Rocket', 'LiteSpeed Cache', 'Query Monitor', 'Google Analytics', 'Shopify Analytics'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-bg">
      <div className="container">
        <div className="section-label">Technical Skills</div>
        <h2 className="section-title">WHAT I<br />BRING TO THE TABLE</h2>
        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div className="skill-category" key={cat.title}>
              <div className="skill-cat-title">{cat.title}</div>
              <div className="skill-tags">
                {cat.skills.map((s) => (
                  <span className="skill-tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
