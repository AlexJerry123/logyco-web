'use client'
import { useState, useEffect } from 'react'

const links = [
    { label: 'Partners', href: '#partners' },
    { label: 'Productos', href: '#productos' },
    { label: 'Sectores', href: '#sectores' }, 
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Casos de éxito', href: '#casos' },
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
        padding: '18px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(255,255,255,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(10,22,40,0.06)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 20px rgba(10,22,40,0.06)' : 'none',
        transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',
          }}>
              <a
                  href="/"
                  className="logo-mark"
                  onClick={(e) => {
                      if (window.location.pathname === '/') {
                          e.preventDefault()
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                      }
                  }}
                  style={{ display: 'flex', alignItems: 'center', height: '40px', flexShrink: 0, textDecoration: 'none' }}
              >
                  <img
                      src="/logo-full.png"
                      alt="LOGYCO"
                      style={{ height: '60px', width: 'auto', display: 'block' }}
                  />
              </a>
              

        {/* Desktop pill nav */}
        <div className="desk-nav" style={{
          display: 'flex', alignItems: 'center', gap: '2px',
          background: 'var(--navy)', borderRadius: '100px',
          padding: '6px 6px 6px 24px',
          boxShadow: scrolled ? '0 10px 28px rgba(10,22,40,0.28)' : '0 6px 18px rgba(10,22,40,0.16)',
          transition: 'box-shadow 0.3s',
        }}>
          {links.map(l => (
            <a key={l.label} href={l.href} style={{
              fontSize: '14px', color: 'rgba(255,255,255,0.72)', fontWeight: 500,
              padding: '11px 16px', transition: 'color 0.15s', whiteSpace: 'nowrap',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.72)'}
            >{l.label}</a>
          ))}
          <a href="/contacto" style={{
            padding: '11px 22px', background: 'var(--orange, #e8401c)', color: 'white',
            borderRadius: '100px', fontSize: '14px', fontWeight: 600, marginLeft: '6px',
            whiteSpace: 'nowrap', transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >Contacto</a>
        </div>

        {/* Mobile hamburger */}
        <button className="mob-nav" onClick={() => setMenuOpen(!menuOpen)} style={{
          background: 'var(--navy)', border: 'none', cursor: 'pointer',
          width: '46px', height: '46px', borderRadius: '100px',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px',
          boxShadow: '0 6px 18px rgba(10,22,40,0.16)',
        }}>
          <div style={{ width: '18px', height: '2px', background: 'white', borderRadius: '1px', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
          <div style={{ width: '18px', height: '2px', background: 'white', borderRadius: '1px', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
          <div style={{ width: '18px', height: '2px', background: 'white', borderRadius: '1px', transition: 'transform 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mob-nav" style={{
          position: 'fixed', top: '78px', left: '16px', right: '16px', zIndex: 99,
          background: 'var(--navy)', borderRadius: '18px',
          padding: '10px', display: 'flex', flexDirection: 'column', gap: '0',
          boxShadow: '0 20px 44px rgba(10,22,40,0.35)',
        }}>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{
              fontSize: '16px', color: 'rgba(255,255,255,0.85)', fontWeight: 500,
              padding: '14px 12px', borderBottom: '1px solid rgba(255,255,255,0.08)',
            }}>{l.label}</a>
          ))}
          <a href="/contacto" onClick={() => setMenuOpen(false)} style={{
            marginTop: '10px', padding: '14px', background: 'var(--orange, #e8401c)', color: 'white',
            borderRadius: '10px', fontSize: '15px', fontWeight: 600, textAlign: 'center',
          }}>Contacto</a>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
        @font-face {
          font-family: 'Horizon';
          src: url('/fonts/Horizon-Bold.woff2') format('woff2'),
               url('/fonts/Horizon-Bold.woff') format('woff'),
               url('/fonts/Horizon-Bold.otf') format('opentype');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        @media(min-width:769px){ .mob-nav{display:none!important} }
        @media(max-width:768px){ .desk-nav{display:none!important} }
      `}</style>
    </>
  )
}
