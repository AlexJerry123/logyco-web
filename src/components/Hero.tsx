'use client'

export default function Hero() {
  return (
    <>
      <section style={{ paddingTop: '64px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden', marginTop: '16px' }} className="hero-grid">

            {/* LEFT */}
            <div style={{ padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--white)' }} className="hero-left">
              <div className="section-tag fu d1">Identificación · Movilidad · Trazabilidad</div>
              <h1 className="fu d2" style={{ fontSize: 'clamp(32px, 5vw, 62px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: 'var(--text-primary)', marginBottom: '20px' }}>
                Integramos hardware. Diseñamos software.{' '}
                <span style={{ color: 'var(--orange)' }}>Resolvemos logística.</span>
              </h1>
              <p className="fu d3" style={{ fontSize: 'clamp(15px, 2vw, 17px)', color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: '420px', marginBottom: '32px' }}>
                Soluciones de identificación automática, movilidad y trazabilidad para logística, industria y distribución.
              </p>
              <div className="fu d4" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="#contacto" style={{ padding: '13px 24px', background: 'var(--navy)', color: 'white', borderRadius: '8px', fontSize: '15px', fontWeight: 600, transition: 'background 0.2s', whiteSpace: 'nowrap' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--navy-light)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'var(--navy)'}
                >Hablar con un experto →</a>
                <a href="#soluciones" style={{ padding: '13px 24px', border: '1px solid var(--border-strong)', color: 'var(--text-primary)', borderRadius: '8px', fontSize: '15px', fontWeight: 500, transition: 'border-color 0.2s', whiteSpace: 'nowrap' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--text-primary)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-strong)'}
                >Ver soluciones</a>
              </div>
              <div className="fu d5" style={{ display: 'flex', gap: '0', marginTop: '40px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
                {[{ n: '+20', l: 'años experiencia' }, { n: '+500', l: 'proyectos' }, { n: '+30', l: 'partners' }].map((s, i) => (
                  <div key={i} style={{ flex: 1, borderRight: i < 2 ? '1px solid var(--border)' : 'none', paddingRight: i < 2 ? '16px' : '0', marginRight: i < 2 ? '16px' : '0' }}>
                    <div style={{ fontSize: 'clamp(24px, 4vw, 34px)', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--navy)', lineHeight: 1 }}>{s.n}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — imagen */}
            <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy)', minHeight: '300px' }} className="hero-right">
              <div style={{ position: 'absolute', inset: 0 }}>
                <img src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=900&h=600&fit=crop&crop=center&q=85"
                  alt="Almacén logístico" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.55, display: 'block' }} />
              </div>
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(255,255,255,0.97)', borderRadius: '10px', padding: '12px 16px' }}>
                <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--navy)', letterSpacing: '-0.04em', lineHeight: 1 }}>99.8%</div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '3px' }}>precisión en picking</div>
              </div>
              <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--orange)', borderRadius: '10px', padding: '10px 14px' }}>
                <div style={{ fontSize: '22px', fontWeight: 800, color: 'white', letterSpacing: '-0.04em', lineHeight: 1 }}>+20</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.85)', marginTop: '3px' }}>años experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; }
        .hero-left { padding: 48px 40px; }
        @media(max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr; }
          .hero-left { padding: 36px 24px; }
          .hero-right { min-height: 240px; }
        }
      `}</style>
    </>
  )
}
