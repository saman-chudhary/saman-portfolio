import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Saman Chudhary — Senior WordPress & Shopify Developer',
  description: 'Senior WordPress & Shopify Developer based in Lahore, Pakistan. 5+ years building high-performance e-commerce and corporate websites for global clients.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
