export default function About() {
  const info = [
    { label: 'Location',    value: 'Lahore, Pakistan' },
    { label: 'Phone',       value: '+92 311 481 5166' },
    { label: 'Email',       value: 'samanchudhary12345@gmail.com' },
    { label: 'Education',   value: 'BS Computer Science — UAF, 2020' },
    { label: 'Stack',       value: 'WordPress · Shopify · Next.js · PHP · JS' },
    { label: 'Availability', value: 'Open to freelance & full-time', accent: true },
  ]
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">About Me</div>
          <div className="section-label-line" />
        </div>
        <div className="about-grid">
          <div className="about-left">
            <h2 className="section-title reveal delay-1">BUILDING THE<br />WEB, PRECISELY.</h2>
            <div className="about-text reveal delay-2">
              <p>I&apos;m a <span className="about-highlight">Senior WordPress &amp; Shopify Developer</span> based in Lahore, Pakistan, with 5+ years of experience designing and building high-performance e-commerce and corporate websites for global clients.</p>
              <p>My work spans <span className="about-highlight">custom WordPress themes</span>, fully configured Shopify stores with Liquid theme development, complex WooCommerce solutions, and technical SEO strategies that move the needle — measured in real analytics.</p>
              <p>I recently expanded into modern full-stack development, building portfolio sites with <span className="about-highlight">Next.js, Vercel &amp; GitHub</span> — delivering lightning-fast, production-ready web experiences.</p>
            </div>
            <div className="about-cta reveal delay-3">
              <a href="#contact" className="btn-primary">
                <span>Let&apos;s Work Together</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>
          <div className="about-right">
            {info.map((item, i) => (
              <div className={`info-card reveal delay-${(i % 3) + 1}`} key={item.label}>
                <div className="info-card-label">{item.label}</div>
                <div className="info-card-value" style={(item as any).accent ? { color: 'var(--accent)' } : {}}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
