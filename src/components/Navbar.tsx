'use client'
import { useState, useEffect } from 'react'

const links = ['Soluciones', 'Sectores', 'Partners', 'Casos de éxito', 'Empresa']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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
      background: scrolled ? 'rgba(8,12,16,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.4s ease',
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          width: '32px', height: '32px',
          background: 'var(--gradient-accent)',
          borderRadius: '8px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="1" y="1" width="7" height="7" rx="1.5" fill="white" fillOpacity="0.9"/>
            <rect x="10" y="1" width="7" height="7" rx="1.5" fill="white" fillOpacity="0.5"/>
            <rect x="1" y="10" width="7" height="7" rx="1.5" fill="white" fillOpacity="0.5"/>
            <rect x="10" y="10" width="7" height="7" rx="1.5" fill="white" fillOpacity="0.9"/>
          </svg>
        </div>
        <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '20px', letterSpacing: '-0.03em' }}>
          LOGY<span style={{ color: 'var(--accent)' }}>CO</span>
        </span>
      </div>

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
        color: '#000',
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
