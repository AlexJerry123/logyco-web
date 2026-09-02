'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const links = [
    { label: 'Partners', href: '#partners' },
    { label: 'Sectores', href: '#sectores' },
    { label: 'Soluciones', href: '#soluciones' },
  { label: 'Casos de éxito', href: '#casos' },
  { label: 'Empresa', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: '64px', padding: '0 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'border-color 0.3s',
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', height: '40px', flexShrink: 0 }}>
          <Image src="/logo.jpg" alt="Logística & Codificación" width={160} height={40} style={{ objectFit: 'contain', objectPosition: 'left' }} />
        </a>

        {/* Desktop links */}
        <div className="desk-nav" style={{ display: 'flex', gap: '28px' }}>
          {links.map(l => (
            <a key={l.label} href={l.href} style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 400, transition: 'color 0.15s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >{l.label}</a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a href="#contacto" className="desk-nav" style={{
          padding: '10px 20px', background: 'var(--navy)', color: 'white',
          borderRadius: '8px', fontSize: '14px', fontWeight: 600, transition: 'background 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--navy-light)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--navy)'}
        >Contactar →</a>

        {/* Mobile hamburger */}
        <button className="mob-nav" onClick={() => setMenuOpen(!menuOpen)} style={{
          background: 'none', border: 'none', cursor: 'pointer', padding: '8px',
          display: 'flex', flexDirection: 'column', gap: '5px',
        }}>
          <div style={{ width: '22px', height: '2px', background: 'var(--text-primary)', borderRadius: '1px', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
          <div style={{ width: '22px', height: '2px', background: 'var(--text-primary)', borderRadius: '1px', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
          <div style={{ width: '22px', height: '2px', background: 'var(--text-primary)', borderRadius: '1px', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mob-nav" style={{
          position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 99,
          background: 'white', borderBottom: '1px solid var(--border)',
          padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: '0',
        }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{
              fontSize: '16px', color: 'var(--text-primary)', fontWeight: 500,
              padding: '14px 0', borderBottom: '1px solid var(--border)',
            }}>{l.label}</a>
          ))}
          <a href="#contacto" onClick={() => setMenuOpen(false)} style={{
            marginTop: '16px', padding: '14px', background: 'var(--navy)', color: 'white',
            borderRadius: '8px', fontSize: '15px', fontWeight: 600, textAlign: 'center',
          }}>Contactar →</a>
        </div>
      )}

      <style>{`
        @media(min-width:769px){ .mob-nav{display:none!important} }
        @media(max-width:768px){ .desk-nav{display:none!important} }
      `}</style>
    </>
  )
}
