'use client'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <footer style={{ background: '#111830', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 20px 32px' }}>
          <div className="footer-grid" style={{ marginBottom: '40px' }}>
            <div>
              <div style={{ marginBottom: '14px' }}>
                <Image src="/logo.jpg" alt="Logística & Codificación" width={150} height={38} style={{ objectFit: 'contain', objectPosition: 'left' }} />
              </div>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, maxWidth: '240px' }}>
                Especialistas en identificación automática, movilidad empresarial y trazabilidad industrial.
              </p>
            </div>
            {[
              { title: 'Soluciones', links: ['Movilidad Industrial', 'RFID', 'Trazabilidad', 'Impresión', 'Automatización'] },
              { title: 'Sectores', links: ['Industria', 'Logística', 'Retail', 'Healthcare', 'Alimentación'] },
              { title: 'Empresa', links: ['Quiénes somos', 'Partners', 'Casos de éxito', 'Blog', 'Contacto'] },
            ].map(col => (
              <div key={col.title}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px' }}>{col.title}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {col.links.map(link => (
                    <a key={link} href="#" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', transition: 'color 0.15s' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
                    >{link}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>© {new Date().getFullYear()} Logística & Codificación. Todos los derechos reservados.</span>
            <div style={{ display: 'flex', gap: '16px' }}>
              {['Privacidad', 'Cookies', 'Aviso legal'].map(link => (
                <a key={link} href="#" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', transition: 'color 0.15s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'}
                >{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
      <style>{`
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; }
        @media(max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr; gap: 28px; } }
        @media(max-width: 480px) { .footer-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  )
}
