export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">SAMAN<span className="footer-logo-dot">.</span></div>
        <div className="footer-tagline">Senior WordPress & Shopify Developer</div>
      </div>
      <div className="footer-divider" />
      <div className="footer-bottom">
        <div className="footer-copy">© {new Date().getFullYear()} Saman Chudhary. All rights reserved.</div>
        <div className="footer-built">Built with Next.js · Deployed on Vercel</div>
      </div>
    </footer>
  )
}
