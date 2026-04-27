'use client'
import { useEffect, useRef } from 'react'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Clients from '@/components/Clients'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring   = ringRef.current
    if (!cursor || !ring) return
    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX - 4 + 'px'
      cursor.style.top  = e.clientY - 4 + 'px'
      setTimeout(() => {
        ring.style.left = e.clientX - 19 + 'px'
        ring.style.top  = e.clientY - 19 + 'px'
      }, 60)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-l, .reveal-r, .reveal-scale')
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } })
    }, { threshold: 0.1 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
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
        <Projects />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
