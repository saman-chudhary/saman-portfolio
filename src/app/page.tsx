'use client'

import { useEffect, useRef, useState } from 'react'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Clients from '@/components/Clients'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    let rx = 0, ry = 0

    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX - 4 + 'px'
      cursor.style.top = e.clientY - 4 + 'px'
      setTimeout(() => {
        ring.style.left = e.clientX - 20 + 'px'
        ring.style.top = e.clientY - 20 + 'px'
      }, 60)
    }

    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
