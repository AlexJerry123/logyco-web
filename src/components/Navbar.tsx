'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const links = ['Soluciones', 'Sectores', 'Partners', 'Casos de éxito', 'Empresa']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: '68px', padding: '0 48px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'border-color 0.3s',
    }}>
      <a href="/">
        <Image src="/logo.jpg" alt="Logística & Codificación" width={155} height={38} style={{ objectFit: 'contain', objectPosition: 'left' }} />
      </a>
      <div style={{ display: 'flex', gap: '28px' }} className="desk-nav">
        {links.map(l => (
          <a key={l} href="#" style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 400, transition: 'color 0.15s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
          >{l}</a>
        ))}
      </div>
      <a href="#contacto" style={{
        padding: '10px 20px', background: 'var(--navy)', color: 'white',
        borderRadius: '8px', fontSize: '14px', fontWeight: 600,
        transition: 'background 0.2s',
      }}
        onMouseEnter={e => e.currentTarget.style.background = 'var(--navy-light)'}
        onMouseLeave={e => e.currentTarget.style.background = 'var(--navy)'}
      >Contactar →</a>
      <style>{`@media(max-width:768px){.desk-nav{display:none!important}}`}</style>
    </nav>
  )
}
