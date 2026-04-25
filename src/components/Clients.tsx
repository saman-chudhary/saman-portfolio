const clients = [
  { num: '01', name: 'SIT Digital', country: 'Canada' },
  { num: '02', name: 'York Garrison', country: 'Canada' },
  { num: '03', name: 'Neuronics', country: 'USA' },
  { num: '04', name: 'Tree Digital Insurance', country: 'Saudi Arabia' },
]

export default function Clients() {
  return (
    <section id="clients" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-label">International Clients</div>
        <h2 className="section-title">TRUSTED BY<br />GLOBAL BRANDS</h2>
        <div className="clients-grid">
          {clients.map((c) => (
            <div className="client-card" key={c.num}>
              <div className="client-num">{c.num}</div>
              <div className="client-name">{c.name}</div>
              <div className="client-country">{c.country}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
