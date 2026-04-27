export default function Footer() {
  return (
    <footer>
      <div className="footer-copy">© {new Date().getFullYear()} Saman Chudhary. All rights reserved.</div>
      <div className="footer-logo">SAMAN</div>
      <div className="footer-copy">Built with Next.js · Deployed on Vercel</div>
    </footer>
  )
}
