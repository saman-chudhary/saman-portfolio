export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-label">About Me</div>
        <div className="about-grid">
          <div>
            <h2 className="section-title">BUILDING THE<br />WEB, PRECISELY.</h2>
            <div className="about-text">
              <p>
                I'm a <span className="about-highlight">Senior WordPress &amp; Shopify Developer</span> based
                in Pakistan, with 5+ years of experience designing and building high-performance
                e-commerce and corporate websites for clients across the globe.
              </p>
              <p>
                My work spans <span className="about-highlight">custom WordPress themes</span>, fully configured
                Shopify stores with Liquid theme development, complex WooCommerce solutions,
                and technical SEO strategies that actually move the needle — measured in real
                analytics, not guesswork.
              </p>
              <p>
                I work independently, communicate across time zones without friction, and
                deliver on deadline — every time. If you need a developer who treats your
                business metrics as seriously as you do, let's talk.
              </p>
            </div>
          </div>
          <div className="about-right">
            <div className="info-card">
              <div className="info-card-label">Location</div>
              <div className="info-card-value">Machiwal District, Vehari, Pakistan</div>
            </div>
            <div className="info-card">
              <div className="info-card-label">Phone</div>
              <div className="info-card-value">+92 311 481 5166</div>
            </div>
            <div className="info-card">
              <div className="info-card-label">Email</div>
              <div className="info-card-value">samanchudhary12345@gmail.com</div>
            </div>
            <div className="info-card">
              <div className="info-card-label">Education</div>
              <div className="info-card-value">BS Computer Science — University of Agriculture Faisalabad, 2020</div>
            </div>
            <div className="info-card">
              <div className="info-card-label">Availability</div>
              <div className="info-card-value" style={{ color: 'var(--accent)' }}>Open to freelance &amp; full-time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
