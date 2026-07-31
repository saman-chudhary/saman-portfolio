const items = [
  'WordPress Development', 'Shopify Development', 'WooCommerce',
  'Custom PHP Themes', 'Liquid Theme Dev', 'Technical SEO',
  'Core Web Vitals', 'Performance Optimization', 'Next.js',
  'React', 'Elementor', 'E-Commerce Solutions',
]

export default function Marquee() {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {[...items, ...items].map((item, i) => (
          <div className="marquee-item" key={i}>
            <span>{item}</span>
            <span>✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
