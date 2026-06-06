'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const links = ['Soluciones', 'Sectores', 'Partners', 'Casos de éxito', 'Empresa']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 48px',
      height: '68px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'border-color 0.3s',
    }}>
      <a href="/" style={{ display: 'flex', alignItems: 'center', height: '36px' }}>
        <Image src="/logo.png" alt="Logística & Codificación" width={160} height={36} style={{ objectFit: 'contain', objectPosition: 'left' }} />
      </a>

      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }} className="desktop-nav">
        {links.map(link => (
          <a key={link} href="#" style={{
            fontFamily: 'var(--font-inter)', fontSize: '14px', fontWeight: 400,
            color: 'var(--text-secondary)', transition: 'color 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
          >{link}</a>
        ))}
      </div>

      <a href="#contacto" style={{
        fontFamily: 'var(--font-inter)', fontSize: '14px', fontWeight: 500,
        padding: '10px 20px',
        background: 'var(--navy)',
        borderRadius: '8px',
        color: '#fff',
        transition: 'background 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.background = 'var(--navy-light)'}
      onMouseLeave={e => e.currentTarget.style.background = 'var(--navy)'}
      >
        Contactar →
      </a>

      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
      `}</style>
    </nav>
  )
}
