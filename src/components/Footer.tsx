'use client'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ padding: '60px 40px 40px', borderTop: '1px solid var(--border)', background: 'var(--black)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '60px' }}>
          <div>
            <div style={{ marginBottom: '16px' }}>
              <Image src="/logo.png" alt="Logística & Codificación" width={160} height={40} style={{ objectFit: 'contain', objectPosition: 'left' }} />
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '280px', fontWeight: 300 }}>
              Especialistas en identificación automática, movilidad empresarial y trazabilidad para entornos industriales y logísticos.
            </p>
          </div>
          {[
            { title: 'Soluciones', links: ['Movilidad Industrial', 'RFID', 'Trazabilidad', 'Impresión', 'Automatización'] },
            { title: 'Sectores', links: ['Industria', 'Logística', 'Retail', 'Healthcare', 'Alimentación'] },
            { title: 'Empresa', links: ['Quiénes somos', 'Partners', 'Casos de éxito', 'Blog', 'Contacto'] },
          ].map(col => (
            <div key={col.title}>
              <div style={{ fontFamily: 'var(--font-syne)', fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>
                {col.title}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {col.links.map(link => (
                  <a key={link} href="#" style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 300, transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--orange)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                  >{link}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ paddingTop: '24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>© {new Date().getFullYear()} Logística & Codificación. Todos los derechos reservados.</span>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacidad', 'Cookies', 'Aviso legal'].map(link => (
              <a key={link} href="#" style={{ fontSize: '12px', color: 'var(--text-muted)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--orange)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
