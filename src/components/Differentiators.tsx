'use client'

const items = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
      </svg>
    ),
    title: 'Asociaciones acreditadas',
    desc: 'Certificados por los principales fabricantes tecnológicos del sector: Zebra, Honeywell, Datalogic y más.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
      </svg>
    ),
    title: 'Soporte global',
    desc: 'Servicio y cobertura integrales dondequiera que opere tu empresa, con respuesta rápida garantizada.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"/>
      </svg>
    ),
    title: 'Escalabilidad sin límites',
    desc: 'Suministro y despliegue ágil, desde instalaciones individuales hasta escala empresarial sin fricciones.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--orange)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Experiencia contrastada',
    desc: 'Décadas entregando resultados tecnológicos fiables en los entornos industriales más exigentes.',
  },
]

export default function Differentiators() {
  return (
    <>
      <section style={{ background: '#111827', padding: '100px 20px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px', maxWidth: '900px' }}>

            <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.12, color: '#ffffff', margin: '0 0 16px' }}>
              Lo que nos diferencia
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, margin: 0 }}>
              Experiencia, certificaciones y compromiso en cada proyecto que implantamos.
            </p>
          </div>

          {/* Grid */}
          <div className="diff-grid">
            {items.map((item, i) => (
              <div key={i} className="diff-item">
                <div className="diff-icon">{item.icon}</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'white', marginBottom: '10px', lineHeight: 1.3 }}>
                  {item.title}
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .diff-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }
        @media(max-width: 1024px) {
          .diff-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
        }
        @media(max-width: 480px) {
          .diff-grid { grid-template-columns: 1fr; gap: 20px; }
        }

        .diff-item {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 28px;
          transition: border-color 0.25s ease;
        }
        .diff-item:hover { border-top-color: var(--orange); }

        .diff-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          transition: background 0.25s ease, transform 0.25s ease;
        }
        .diff-item:hover .diff-icon { background: var(--orange); transform: scale(1.06); }
        .diff-item:hover .diff-icon svg { stroke: white; }
      `}</style>
    </>
  )
}
