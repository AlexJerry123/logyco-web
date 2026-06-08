'use client'

export default function Hero() {
  return (
    <>
      <section style={{ paddingTop: '64px', background: '#0a1628' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', overflow: 'hidden', marginTop: '16px' }} className="hero-grid">

            {/* LEFT */}
            <div style={{ padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#0a1628', position: 'relative', overflow: 'hidden' }} className="hero-left">
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.05 }} xmlns="http://www.w3.org/2000/svg">
                <defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/></pattern></defs>
                <rect width="100%" height="100%" fill="url(#grid)"/>
              </svg>
              <div className="fu d1" style={{ fontSize: '11px', fontWeight: 600, color: '#e8401c', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px', position: 'relative' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#e8401c', display: 'inline-block', flexShrink: 0 }}></span>
                Identificación · Movilidad · Trazabilidad
              </div>
              <h1 className="fu d2" style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#ffffff', marginBottom: '20px', position: 'relative' }}>
                Integramos hardware. Diseñamos software.{' '}
                <span style={{ color: '#e8401c' }}>Resolvemos logística.</span>
              </h1>
              <p className="fu d3" style={{ fontSize: 'clamp(14px, 1.5vw, 16px)', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, maxWidth: '420px', marginBottom: '32px', position: 'relative' }}>
                Soluciones de identificación automática, movilidad y trazabilidad para logística, industria y distribución.
              </p>
              <div className="fu d4" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', position: 'relative' }}>
                <a href="#contacto" style={{ padding: '13px 24px', background: '#e8401c', color: 'white', borderRadius: '8px', fontSize: '15px', fontWeight: 600, transition: 'opacity 0.2s', whiteSpace: 'nowrap' }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >Hablar con un experto →</a>
                <a href="#soluciones" style={{ padding: '13px 24px', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)', borderRadius: '8px', fontSize: '15px', fontWeight: 500, transition: 'border-color 0.2s', whiteSpace: 'nowrap' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
                >Ver soluciones</a>
              </div>
              <div className="fu d5" style={{ display: 'flex', marginTop: '40px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.07)', position: 'relative' }}>
                {[{ n: '+20', l: 'años experiencia' }, { n: '+500', l: 'proyectos' }, { n: '+30', l: 'partners' }].map((s, i) => (
                  <div key={i} style={{ flex: 1, borderRight: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none', paddingRight: i < 2 ? '16px' : '0', marginRight: i < 2 ? '16px' : '0' }}>
                    <div style={{ fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800, letterSpacing: '-0.04em', color: '#ffffff', lineHeight: 1 }}>{s.n}</div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', marginTop: '4px' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT - desktop */}
            <div style={{ position: 'relative', overflow: 'hidden', background: '#0d1e35', minHeight: '300px' }} className="hero-right">
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #0d1e35 0%, transparent 40%)', zIndex: 1 }} />
              <img src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=900&h=600&fit=crop&crop=center&q=85"
                alt="Almacén logístico" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity: 0.4, display: 'block' }} />
              <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(255,255,255,0.97)', borderRadius: '10px', padding: '12px 16px', zIndex: 2 }}>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#0a1628', letterSpacing: '-0.04em', lineHeight: 1 }}>99.8%</div>
                <div style={{ fontSize: '11px', color: '#6b7f95', marginTop: '3px' }}>precisión en picking</div>
              </div>
              <div style={{ position: 'absolute', top: '20px', right: '20px', background: '#e8401c', borderRadius: '10px', padding: '10px 14px', zIndex: 2 }}>
                <div style={{ fontSize: '22px', fontWeight: 800, color: 'white', letterSpacing: '-0.04em', lineHeight: 1 }}>+20</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.85)', marginTop: '3px' }}>años experiencia</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MOBILE hero - foto de fondo con overlay */}
      <style>{`
        .hero-grid { display: grid; grid-template-columns: 1fr 1fr; }
        .hero-left { padding: 48px 40px; }
        .hero-mobile { display: none; }

        @media(max-width: 768px) {
          .hero-grid { display: none; }
          .hero-mobile {
            display: block;
            margin-top: 64px;
            position: relative;
            min-height: 100svh;
            overflow: hidden;
            background: #0a1628;
          }
          .hero-mobile-bg {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            opacity: 0.25;
            display: block;
          }
          .hero-mobile-content {
            position: relative;
            z-index: 1;
            padding: 36px 24px 32px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 100svh;
          }
          .hero-mobile-b2 {
            position: absolute;
            top: 20px;
            right: 20px;
            background: #e8401c;
            border-radius: 10px;
            padding: 10px 14px;
            z-index: 2;
          }
        }
      `}</style>

      <div className="hero-mobile">
        <img src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=900&h=600&fit=crop&crop=center&q=85" alt="Almacén" className="hero-mobile-bg" />
        <div className="hero-mobile-b2">
          <div style={{ fontSize: '20px', fontWeight: 800, color: 'white', letterSpacing: '-0.04em', lineHeight: 1 }}>+20</div>
          <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.85)', marginTop: '2px' }}>años experiencia</div>
        </div>
        <div className="hero-mobile-content">
          <div>
            <div style={{ fontSize: '10px', fontWeight: 600, color: '#e8401c', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#e8401c', display: 'inline-block', flexShrink: 0 }}></span>
              Identificación · Movilidad · Trazabilidad
            </div>
            <h1 style={{ fontSize: '30px', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.08, color: '#fff', marginBottom: '14px' }}>
              Integramos hardware. Diseñamos software.{' '}
              <span style={{ color: '#e8401c' }}>Resolvemos logística.</span>
            </h1>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, marginBottom: '24px' }}>
              Soluciones de identificación automática, movilidad y trazabilidad para logística, industria y distribución.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
              <a href="#contacto" style={{ padding: '14px 20px', background: '#e8401c', color: 'white', borderRadius: '8px', fontSize: '15px', fontWeight: 600, textAlign: 'center' }}>Hablar con un experto →</a>
              <a href="#soluciones" style={{ padding: '14px 20px', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)', borderRadius: '8px', fontSize: '15px', fontWeight: 500, textAlign: 'center' }}>Ver soluciones</a>
            </div>
          </div>
          <div style={{ display: 'flex', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            {[{ n: '+20', l: 'años experiencia' }, { n: '+500', l: 'proyectos' }, { n: '+30', l: 'partners' }].map((s, i) => (
              <div key={i} style={{ flex: 1, borderRight: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none', paddingRight: i < 2 ? '12px' : '0', marginRight: i < 2 ? '12px' : '0' }}>
                <div style={{ fontSize: '22px', fontWeight: 800, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginTop: '3px' }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
