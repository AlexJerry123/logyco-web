'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const links = ['Soluciones', 'Sectores', 'Partners', 'Casos de éxito', 'Empresa']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 40px',
      height: '72px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(10,13,20,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.4s ease',
    }}>
      {/* Logo */}
      <a href="/" style={{ display: 'flex', alignItems: 'center', height: '44px' }}>
        <Image src="/logo.png" alt="Logística & Codificación" width={180} height={44} style={{ objectFit: 'contain', objectPosition: 'left' }} />
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }} className="desktop-nav">
        {links.map(link => (
          <a key={link} href="#" style={{
            fontFamily: 'var(--font-dm)', fontSize: '14px', fontWeight: 400,
            color: 'var(--text-secondary)', transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
          >{link}</a>
        ))}
      </div>

      {/* CTA */}
      <a href="#contacto" style={{
        fontFamily: 'var(--font-syne)', fontSize: '13px', fontWeight: 600,
        padding: '10px 22px',
        background: 'var(--gradient-accent)',
        borderRadius: '100px',
        color: '#fff',
        letterSpacing: '0.02em',
        transition: 'opacity 0.2s, transform 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'scale(1.03)' }}
      onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'scale(1)' }}
      >
        Contactar
      </a>

      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
      `}</style>
    </nav>
  )
}
