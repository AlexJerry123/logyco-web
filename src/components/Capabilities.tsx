'use client'

type Capability = {
  title: string
  desc: string
  tag: string
  icon: (props: { color: string }) => React.JSX.Element
}

function MobilityIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" stroke={color} strokeWidth="1.8" />
      <path d="M6 6h12M6 17.5h12" stroke={color} strokeWidth="1.8" />
      <circle cx="12" cy="19.3" r="1.3" fill="var(--orange)" />
    </svg>
  )
}

function RfidIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="17" r="2" stroke={color} strokeWidth="1.8" />
      <path d="M11 13c2.5-2.5 2.5-6.5 0-9M14.2 15.8c3.7-3.7 3.7-9.6 0-13.3M17.4 18.6c4.9-4.9 4.9-12.9 0-17.8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="7" cy="17" r="0.6" fill="var(--orange)" />
    </svg>
  )
}

function TraceIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6h13a3 3 0 0 1 0 6H7a3 3 0 0 0 0 6h13" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="4" cy="6" r="1.6" fill="var(--orange)" />
      <circle cx="20" cy="18" r="1.6" stroke={color} strokeWidth="1.8" />
    </svg>
  )
}

function PrinterIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="8.5" width="14" height="8" rx="1.6" stroke={color} strokeWidth="1.8" />
      <path d="M7.5 8.5V4h9v4.5" stroke={color} strokeWidth="1.8" strokeLinejoin="round" />
      <rect x="8" y="14" width="8" height="6" rx="1" stroke={color} strokeWidth="1.8" />
      <circle cx="16" cy="11" r="0.9" fill="var(--orange)" />
    </svg>
  )
}

function GearIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="3.4" stroke={color} strokeWidth="1.8" />
      <path
        d="M12 3v2.4M12 18.6V21M21 12h-2.4M5.4 12H3M18.1 5.9l-1.7 1.7M7.6 16.5l-1.7 1.7M18.1 18.1l-1.7-1.7M7.6 7.6 5.9 5.9"
        stroke={color} strokeWidth="1.8" strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="1.1" fill="var(--orange)" />
    </svg>
  )
}

function SupportIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <rect x="2.5" y="13" width="4" height="6" rx="1.5" stroke={color} strokeWidth="1.8" />
      <rect x="17.5" y="13" width="4" height="6" rx="1.5" stroke={color} strokeWidth="1.8" />
      <path d="M19.5 19v1a3 3 0 0 1-3 3h-3" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="13.5" cy="23" r="1.1" fill="var(--orange)" />
    </svg>
  )
}

const caps: Capability[] = [
  { title: 'Movilidad Industrial', tag: 'Hardware & Software', desc: 'Terminales robustos y ordenadores de mano para entornos exigentes de producción y logística.', icon: MobilityIcon },
  { title: 'RFID', tag: 'Identificación automática', desc: 'Sistemas RFID para control de inventario, acceso y trazabilidad en tiempo real.', icon: RfidIcon },
  { title: 'Trazabilidad', tag: 'Control de procesos', desc: 'Control total del ciclo de vida del producto desde la recepción hasta la entrega.', icon: TraceIcon },
  { title: 'Impresión y Etiquetado', tag: 'Automatización', desc: 'Impresión industrial y etiquetado inteligente integrado con ERP y WMS.', icon: PrinterIcon },
  { title: 'Automatización Operativa', tag: 'Eficiencia operacional', desc: 'Captura de datos automática para reducir errores y optimizar tiempos operativos.', icon: GearIcon },
  { title: 'Servicios y Soporte', tag: 'Servicio 360°', desc: 'Mantenimiento preventivo, soporte técnico y formación especializada.', icon: SupportIcon },
]

export default function Capabilities() {
  return (
    <section id="soluciones" style={{ padding: '80px 20px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '40px', maxWidth: '900px' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4.6vw, 46px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08, color: 'var(--text-primary)', margin: '0 0 14px' }}>
            Soluciones para cada punto crítico de tu operativa
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>
            Tecnología implantada por especialistas con más de 20 años de experiencia.
          </p>
        </div>

        <div className="cp-grid">
          {caps.map((c) => {
            const Icon = c.icon
            return (
              <a href="#contacto" className="cp-card" key={c.title}>
                <span className="cp-topbar" />
                <div className="cp-icon">
                  <Icon color="var(--orange)" />
                </div>
                <div className="cp-tag">{c.tag}</div>
                <h3 className="cp-title">{c.title}</h3>
                <p className="cp-desc">{c.desc}</p>
                <span className="cp-cta">
                  Saber más
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 8h9M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            )
          })}
        </div>
      </div>

      <style>{`
        .cp-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }
        @media (max-width: 1024px) { .cp-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 640px) { .cp-grid { grid-template-columns: 1fr; } }

        .cp-card {
          position: relative;
          overflow: hidden;
          display: block;
          border: 1px solid var(--border);
          border-radius: 16px;
          background: var(--white);
          padding: 28px 24px 24px;
          text-decoration: none;
          box-shadow: 0 6px 20px rgba(10,22,40,0.05);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .cp-card:hover {
          transform: translateY(-4px);
          border-color: var(--navy);
          box-shadow: 0 16px 32px rgba(10,22,40,0.1);
        }

        .cp-topbar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background-image: linear-gradient(to right, #ff503d, #ff653a, #ff7838, #ff8939, #ff993d);
          transform: scaleX(0.22);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .cp-card:hover .cp-topbar { transform: scaleX(1); }

        .cp-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 13px;
          background: rgba(232,64,28,0.08);
          margin-bottom: 20px;
          transition: background 0.25s ease, transform 0.25s ease;
        }
        .cp-card:hover .cp-icon {
          background: var(--orange);
          transform: scale(1.06);
        }
        .cp-card:hover .cp-icon svg path,
        .cp-card:hover .cp-icon svg rect,
        .cp-card:hover .cp-icon svg circle:not([fill]) {
          stroke: #ffffff;
        }

        .cp-tag {
          font-size: 10px;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .cp-title {
          font-size: 17px;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--navy);
          margin: 0 0 10px;
        }

        .cp-desc {
          font-size: 13.5px;
          line-height: 1.7;
          color: var(--text-secondary);
          margin: 0;
        }

        .cp-cta {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          margin-top: 18px;
          font-size: 13px;
          font-weight: 600;
          color: var(--orange);
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .cp-card:hover .cp-cta { opacity: 1; transform: translateY(0); }
      `}</style>
    </section>
  )
}
