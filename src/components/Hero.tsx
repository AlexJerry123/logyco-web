'use client'

export default function Hero() {
  return (
    <section style={{ paddingTop: '68px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 48px' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          border: '1px solid var(--border)', borderRadius: '20px',
          overflow: 'hidden', marginTop: '24px',
        }}>
          {/* LEFT */}
          <div style={{ padding: '72px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--white)' }}>
            <div className="section-tag fu d1">Identificación · Movilidad · Trazabilidad</div>
            <h1 className="fu d2" style={{
              fontSize: 'clamp(38px, 4vw, 62px)', fontWeight: 800,
              letterSpacing: '-0.04em', lineHeight: 1.05,
              color: 'var(--text-primary)', marginBottom: '24px',
            }}>
              La tecnología que conecta tus operaciones,{' '}
              <span style={{ color: 'var(--orange)' }}>de principio a fin.</span>
            </h1>
            <p className="fu d3" style={{
              fontSize: '17px', color: 'var(--text-secondary)',
              lineHeight: 1.75, maxWidth: '400px', marginBottom: '40px',
            }}>
              Soluciones de identificación automática, movilidad y trazabilidad para logística, industria y distribución.
            </p>
            <div className="fu d4" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="#contacto" style={{
                padding: '14px 28px', background: 'var(--navy)',
                color: 'white', borderRadius: '8px',
                fontSize: '15px', fontWeight: 600, transition: 'background 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--navy-light)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--navy)'}
              >Hablar con un experto →</a>
              <a href="#soluciones" style={{
                padding: '14px 28px', border: '1px solid var(--border-strong)',
                color: 'var(--text-primary)', borderRadius: '8px',
                fontSize: '15px', fontWeight: 500, transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--text-primary)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-strong)'}
              >Ver soluciones</a>
            </div>
            <div className="fu d5" style={{
              display: 'flex', gap: '0', marginTop: '56px',
              borderTop: '1px solid var(--border)',
            }}>
              {[
                { n: '+20', l: 'años experiencia' },
                { n: '+500', l: 'proyectos' },
                { n: '+30', l: 'partners' },
              ].map((s, i) => (
                <div key={i} style={{
                  flex: 1, paddingTop: '24px',
                  borderRight: i < 2 ? '1px solid var(--border)' : 'none',
                  paddingRight: i < 2 ? '24px' : '0',
                  marginRight: i < 2 ? '24px' : '0',
                }}>
                  <div style={{ fontSize: '34px', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--navy)', lineHeight: 1 }}>{s.n}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '5px' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — foto horizontal 16:9 */}
          <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy)' }}>
            {/* aspect ratio container para forzar horizontal */}
            <div style={{ position: 'absolute', inset: 0 }}>
              <img
                src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=900&h=600&fit=crop&crop=center&q=85"
                alt="Operario en almacén logístico con tecnología"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.55, display: 'block' }}
              />
            </div>
            {/* Stat blanca */}
            <div style={{
              position: 'absolute', bottom: '28px', left: '28px',
              background: 'rgba(255,255,255,0.97)', borderRadius: '12px',
              padding: '14px 20px',
            }}>
              <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--navy)', letterSpacing: '-0.04em', lineHeight: 1 }}>99.8%</div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>precisión media en picking</div>
            </div>
            {/* Stat naranja */}
            <div style={{
              position: 'absolute', top: '28px', right: '28px',
              background: 'var(--orange)', borderRadius: '12px',
              padding: '12px 18px',
            }}>
              <div style={{ fontSize: '26px', fontWeight: 800, color: 'white', letterSpacing: '-0.04em', lineHeight: 1 }}>+20</div>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.85)', marginTop: '4px' }}>años de experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
