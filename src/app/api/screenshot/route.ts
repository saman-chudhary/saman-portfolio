import { NextRequest, NextResponse } from 'next/server'

// Server-side screenshot proxy — bypasses CORS & paywalls
// Uses pagepeeker free API (no key needed, returns cached thumbs fast)
export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get('url')
  if (!url) return NextResponse.json({ error: 'Missing url' }, { status: 400 })

  const enc = encodeURIComponent(url)

  // Try services in order
  const services = [
    `https://free.pagepeeker.com/v2/thumbs.php?size=x&url=${enc}`,
    `https://mini.s-shot.ru/1024x640/JPEG/1024/Z100/?${url}`,
  ]

  for (const src of services) {
    try {
      const res = await fetch(src, {
        headers: { 'User-Agent': 'Mozilla/5.0' },
        signal: AbortSignal.timeout(8000),
      })
      if (res.ok && res.headers.get('content-type')?.startsWith('image/')) {
        const buf = await res.arrayBuffer()
        return new NextResponse(buf, {
          headers: {
            'Content-Type': res.headers.get('content-type') || 'image/jpeg',
            'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
          },
        })
      }
    } catch {
      continue
    }
  }

  return NextResponse.json({ error: 'All sources failed' }, { status: 502 })
}
