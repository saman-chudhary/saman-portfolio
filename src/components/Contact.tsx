export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg-shape" />
      <div className="container">
        <div className="contact-inner">
          <div className="contact-left reveal-l">
            <div className="section-label">Get In Touch</div>
            <h2 className="contact-tagline">LET&apos;S BUILD<br />SOMETHING <em>great</em><br />TOGETHER.</h2>
            <p className="contact-sub">
              Available for freelance projects, long-term contracts, and full-time roles.
              I work across time zones and respond promptly.
            </p>
            <div className="contact-availability">
              <span className="contact-avail-dot" />
              Currently available for new projects
            </div>
          </div>
          <div className="contact-right reveal-r">
            <div className="contact-cards">
              <a href="mailto:samanchudhary12345@gmail.com" className="contact-card">
                <div className="contact-card-icon">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5"/><polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
                <div className="contact-card-body">
                  <div className="contact-card-label">Email</div>
                  <div className="contact-card-value">samanchudhary12345@gmail.com</div>
                </div>
                <div className="contact-card-arrow">→</div>
              </a>
              <a href="tel:+923114815166" className="contact-card">
                <div className="contact-card-icon">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5"/></svg>
                </div>
                <div className="contact-card-body">
                  <div className="contact-card-label">Phone</div>
                  <div className="contact-card-value">+92 311 481 5166</div>
                </div>
                <div className="contact-card-arrow">→</div>
              </a>
              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/></svg>
                </div>
                <div className="contact-card-body">
                  <div className="contact-card-label">Location</div>
                  <div className="contact-card-value">Lahore, Pakistan (Remote Worldwide)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
