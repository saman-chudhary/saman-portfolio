export default function Footer() {
  return (
    <footer>
      <div className="footer-copy">
        © {new Date().getFullYear()} Saman Chudhary. All rights reserved.
      </div>
      <div className="footer-logo">SC_DEV</div>
      <div className="footer-copy">
        Designed &amp; built with Next.js
      </div>
    </footer>
  )
}
