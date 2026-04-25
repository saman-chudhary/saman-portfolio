import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Saman Chudhary — Senior WordPress & Shopify Developer',
  description: 'Senior WordPress & Shopify Developer with 5+ years of experience building high-performance e-commerce and corporate websites.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
