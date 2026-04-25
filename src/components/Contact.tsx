export default function Contact() {
  return (
    <section id="contact" className="contact-bg">
      <div className="container">
        <div className="contact-grid">
          <div>
            <div className="section-label">Get In Touch</div>
            <h2 className="contact-tagline">
              LET'S BUILD<br />SOMETHING <em>great</em><br />TOGETHER.
            </h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '2rem', maxWidth: '400px', lineHeight: '1.8', fontSize: '0.9rem' }}>
              Available for freelance projects, long-term contracts, and full-time roles.
              I work across time zones and respond promptly.
            </p>
          </div>
          <div className="contact-links">
            <a href="mailto:samanchudhary12345@gmail.com" className="contact-link-item">
              <span className="contact-link-icon">Email</span>
              <span className="contact-link-value">samanchudhary12345@gmail.com</span>
            </a>
            <a href="tel:+923114815166" className="contact-link-item">
              <span className="contact-link-icon">Phone</span>
              <span className="contact-link-value">+92 311 481 5166</span>
            </a>
            <div className="contact-link-item">
              <span className="contact-link-icon">Location</span>
              <span className="contact-link-value">Vehari, Pakistan (Remote)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
