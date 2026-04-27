const items = ['WordPress','Shopify','WooCommerce','Core PHP','Liquid Theme Dev','Technical SEO','Elementor','Next.js','React','Vercel','GitHub','Web Performance','E-Commerce','Security Hardening','JavaScript','CSS3','jQuery','GTmetrix']
export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {doubled.map((item, i) => <span className="marquee-item" key={i}>{item}</span>)}
      </div>
    </div>
  )
}
