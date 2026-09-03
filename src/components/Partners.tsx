'use client'

type Feature = {
  title: string
  description: string
  icon: (props: { color: string }) => React.JSX.Element
}

function HardwareIcon({ color }: { color: string }) {
  return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect
              x="6" y="6" width="12" height="12" rx="2"
              stroke={color} strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round"
          />
          <path
              d="M9 6V3M15 6V3M9 21v-3M15 21v-3M6 9H3M6 15H3M21 9h-3M21 15h-3"
              stroke={color} strokeWidth="1.8" strokeLinecap="round"
          />
          <circle cx="19.5" cy="4.5" r="1.3" fill="var(--orange)" />
      </svg>
  )
}

function SatIcon({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3.5 17.5l3 3 5.8-5.8a4 4 0 0 0 5.4-5.4l-2.7 2.7-2-2 2.7-2.7z"
        stroke={color} strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round"
      />
      <circle cx="19.5" cy="4.5" r="1.3" fill="var(--orange)" />
    </svg>
  )
}

function IntegrationsIcon({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6" cy="7" r="2.6" stroke={color} strokeWidth="1.8" />
      <circle cx="18" cy="7" r="2.6" stroke={color} strokeWidth="1.8" />
      <path d="M8.2 8.3 10.5 15.7M15.8 8.3 13.5 15.7M8.6 7h6.8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="18" r="2.6" fill="var(--orange)" />
    </svg>
  )
}

function LabelIcon({ color }: { color: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.3 3.5h6.2a2 2 0 0 1 2 2v6.2a2 2 0 0 1-.6 1.4l-8.6 8.6a2 2 0 0 1-2.8 0l-6.2-6.2a2 2 0 0 1 0-2.8l8.6-8.6a2 2 0 0 1 1.4-.6Z"
        stroke={color} strokeWidth="1.8" strokeLinejoin="round"
      />
      <path d="M9.2 13.2v3M10.9 13v3.4M12.6 13.2v2M14.3 12.9v3.5" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="15.5" cy="8.3" r="1.5" fill="var(--orange)" />
    </svg>
  )
}

const features: Feature[] = [
  {
    title: 'Hardware AIDC',
    description: 'La tecnología que necesitas, siempre a punto. Equipos fiables para optimizar cada proceso.',
    icon: HardwareIcon,
  },
  {
    title: 'SAT',
    description: 'Estamos cuando más nos necesitas. Soporte técnico ágil para que tu negocio no se detenga.',
    icon: SatIcon,
  },
  {
    title: 'Integraciones de software',
    description: 'Todo conectado, todo bajo control. Integramos tus sistemas para trabajar de forma más eficiente.',
    icon: IntegrationsIcon,
  },
  {
    title: 'Etiquetado',
    description: 'Etiqueta, identifica, avanza. Soluciones de etiquetado adaptadas a cada necesidad.',
    icon: LabelIcon,
  },
]

export default function Partners() {
  return (
    <>
      <section id="partners" style={{ padding: '80px 20px', background: 'var(--bg)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '44px', maxWidth: '900px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.12, color: 'var(--text-primary)', margin: '0 0 16px' }}>
              Un <span style={{ color: 'var(--orange)' }}>único partner</span> para todo tu ecosistema <br></br>Auto-ID
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>
              Centraliza software, hardware y mantenimiento con un único proveedor. Logyco pone a tu disposición
              soluciones tecnológicas, soporte especializado y servicios integrales para simplificar la gestión de
              tu infraestructura IT.
            </p>
          </div>

          <div className="pf-grid">
            {features.map((f) => {
              const Icon = f.icon
              return (
                <div className="pf-card" key={f.title}>
                  <span className="pf-shine" />
                  <span className="pf-topbar" />
                  <div className="pf-icon">
                    <Icon color="var(--orange)" />
                  </div>
                  <h3 className="pf-title">{f.title}</h3>
                  <p className="pf-desc">{f.description}</p>
                  <a href="/contacto" className="pf-cta">
                    Contáctanos
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.5 8h9M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <style>{`
        .pf-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }
        @media (max-width: 1024px) { .pf-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 480px) { .pf-grid { grid-template-columns: 1fr; } }

        .pf-card {
          position: relative;
          overflow: hidden;
          border: 1px solid var(--border);
          border-radius: 16px;
          background: rgba(255,255,255,0.82);
          backdrop-filter: blur(14px) saturate(180%);
          -webkit-backdrop-filter: blur(14px) saturate(180%);
          padding: 28px 22px 24px;
          box-shadow: 0 6px 20px rgba(10,22,40,0.05), inset 0 1px 0 rgba(255,255,255,0.7);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .pf-shine {
          position: absolute;
          top: -50%;
          left: -25%;
          width: 55%;
          height: 200%;
          background: linear-gradient(120deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 65%);
          transform: rotate(18deg);
          pointer-events: none;
        }
        .pf-card:hover {
          transform: translateY(-4px);
          border-color: transparent;
          box-shadow: 0 16px 32px rgba(10,22,40,0.1);
        }

        .pf-topbar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background-image: linear-gradient(to right, #ff503d, #ff653a, #ff7838, #ff8939, #ff993d);
          transform: scaleX(0.22);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .pf-card:hover .pf-topbar { transform: scaleX(1); }

        .pf-icon {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: rgba(232,64,28,0.1);
          margin-bottom: 20px;
          transition: background 0.25s ease, transform 0.25s ease;
        }
        .pf-card:hover .pf-icon {
          background: var(--orange);
          transform: scale(1.06);
        }
        .pf-card:hover .pf-icon svg path,
        .pf-card:hover .pf-icon svg rect,
        .pf-card:hover .pf-icon svg circle {
          stroke: #ffffff;
        }

        .pf-title {
          position: relative;
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--navy);
          margin: 0 0 10px;
          letter-spacing: -0.01em;
        }

        .pf-desc {
          position: relative;
          font-size: 0.875rem;
          line-height: 1.65;
          color: var(--text-secondary);
          margin: 0;
        }

        .pf-cta {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 5px;
          margin-top: 16px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--orange);
          text-decoration: none;
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .pf-card:hover .pf-cta { opacity: 1; transform: translateY(0); }
      `}</style>
    </>
  )
}
