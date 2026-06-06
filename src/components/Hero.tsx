'use client'

export default function Hero() {
  return (
    <section style={{
      paddingTop: '140px',
      paddingBottom: '100px',
      paddingLeft: '48px',
      paddingRight: '48px',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      {/* Label */}
      <div className="animate-fade-up delay-1 section-label">
        Identificación · Movilidad · Trazabilidad
      </div>

      {/* Headline — Orbio style: very large, tight, clean */}
      <h1 className="animate-fade-up delay-2" style={{
        fontSize: 'clamp(48px, 6.5vw, 88px)',
        fontWeight: 800,
        lineHeight: 1.05,
        letterSpacing: '-0.03em',
        color: 'var(--text-primary)',
        maxWidth: '900px',
        marginBottom: '32px',
      }}>
        Tecnología que conecta{' '}
        <span style={{ color: 'var(--orange)' }}>operaciones,</span>
        {' '}personas y datos
      </h1>

      {/* Subheadline */}
      <p className="animate-fade-up delay-3" style={{
        fontSize: '18px',
        fontWeight: 400,
        color: 'var(--text-secondary)',
        maxWidth: '560px',
        lineHeight: 1.7,
        marginBottom: '48px',
      }}>
        Ayudamos a empresas de logística, industria y distribución a mejorar la trazabilidad, 
        movilidad y eficiencia de sus procesos con soluciones tecnológicas avanzadas.
      </p>

      {/* CTAs */}
      <div className="animate-fade-up delay-4" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '80px' }}>
        <a href="#contacto" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '14px 28px',
          background: 'var(--navy)',
          borderRadius: '8px',
          fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '15px',
          color: '#fff',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'var(--navy-light)'}
        onMouseLeave={e => e.currentTarget.style.background = 'var(--navy)'}
        >
          Hablar con un experto →
        </a>
        <a href="#soluciones" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '14px 28px',
          background: 'transparent',
          border: '1px solid var(--border-strong)',
          borderRadius: '8px',
          fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '15px',
          color: 'var(--text-primary)',
          transition: 'border-color 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--text-primary)'}
        onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-strong)'}
        >
          Ver soluciones
        </a>
      </div>

      {/* Stats — Orbio style: clean numbers in a row */}
      <div className="animate-fade-up delay-5" style={{
        display: 'flex', gap: '0', flexWrap: 'wrap',
        borderTop: '1px solid var(--border)',
        borderLeft: '1px solid var(--border)',
      }}>
        {[
          { num: '+20', label: 'años de experiencia' },
          { num: '+500', label: 'proyectos implantados' },
          { num: '6', label: 'sectores clave' },
          { num: '+30', label: 'partners tecnológicos' },
        ].map(stat => (
          <div key={stat.label} style={{
            flex: '1', minWidth: '150px',
            padding: '28px 32px',
            borderRight: '1px solid var(--border)',
            borderBottom: '1px solid var(--border)',
          }}>
            <div style={{
              fontFamily: 'var(--font-inter)', fontSize: '40px', fontWeight: 800,
              color: 'var(--text-primary)', lineHeight: 1,
              letterSpacing: '-0.03em',
            }}>
              {stat.num}
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '6px', fontWeight: 400 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
