const clients = [
  { flag: '🇺🇸', country: 'United States', detail: 'E-Commerce & Corporate Sites' },
  { flag: '🇨🇦', country: 'Canada', detail: 'WordPress & WooCommerce' },
  { flag: '🇸🇦', country: 'Saudi Arabia', detail: 'Business & Brand Sites' },
  { flag: '🇵🇰', country: 'Pakistan', detail: 'Agency & Startup Projects' },
]

export default function Clients() {
  return (
    <section id="clients">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Global Reach</div>
          <div className="section-label-line" />
        </div>
        <h2 className="section-title reveal delay-1">CLIENTS I&apos;VE<br />WORKED WITH</h2>
        <div className="clients-grid">
          {clients.map((c, i) => (
            <div className={`client-card reveal delay-${i + 1}`} key={c.country}>
              <div className="client-flag">{c.flag}</div>
              <div className="client-country">{c.country}</div>
              <div className="client-detail">{c.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
