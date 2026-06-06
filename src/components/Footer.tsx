export default function Footer() {
  return (
    <footer style={{
      padding: '60px 40px 40px',
      borderTop: '1px solid var(--border)',
      background: 'var(--black)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '60px' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '28px', height: '28px', background: 'var(--gradient-accent)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <rect x="1" y="1" width="7" height="7" rx="1.5" fill="white" fillOpacity="0.9"/>
                  <rect x="10" y="1" width="7" height="7" rx="1.5" fill="white" fillOpacity="0.5"/>
                  <rect x="1" y="10" width="7" height="7" rx="1.5" fill="white" fillOpacity="0.5"/>
                  <rect x="10" y="10" width="7" height="7" rx="1.5" fill="white" fillOpacity="0.9"/>
                </svg>
              </div>
              <span style={{ fontFamily: 'var(--font-syne)', fontWeight: 700, fontSize: '18px' }}>
                LOGY<span style={{ color: 'var(--accent)' }}>CO</span>
              </span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '280px', fontWeight: 300 }}>
              Especialistas en identificación automática, movilidad empresarial y trazabilidad para entornos industriales y logísticos.
            </p>
          </div>

          {/* Links */}
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
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: '24px', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} LOGYCO. Todos los derechos reservados.
          </span>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacidad', 'Cookies', 'Aviso legal'].map(link => (
              <a key={link} href="#" style={{ fontSize: '12px', color: 'var(--text-muted)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
