'use client'
import { useEffect, useRef, useState } from 'react'

type Product = {
  title: string
  cta: string
  img: string
  description: string
  items: string[]
}

const products: Product[] = [
  {
    title: 'Impresoras',
    cta: 'Ver impresoras',
    img: '/impresora.png',
    description: 'Impresoras de etiquetas rápidas y precisas para empresas y comercios. Optimiza el etiquetado con equipos de alta calidad.',
    items: ['Impresoras de etiquetas', 'Impresoras de tarjetas', 'Impresoras de brazaletes', 'Impresora de tiquets'],
  },
  {
    title: 'Lectores',
    cta: 'Ver lectores',
    img: '/lector.png',
    description: 'Lectores de código de barras robustos y precisos para cualquier entorno de trabajo, desde el mostrador hasta el almacén.',
    items: ['Lectores de código de barras', 'Lectores de sobremesa', 'Lectores industriales', 'Lectores de tarjetas'],
  },
  {
    title: 'Terminales',
    cta: 'Ver terminales',
    img: '/terminal.png',
    description: 'Terminales móviles e industriales que acompañan a tu equipo en cada tarea, dentro y fuera de las instalaciones.',
    items: ['Terminales portátiles', 'Tablets industriales', 'Terminales de carretilla', 'Notebooks'],
  },
  {
    title: 'Etiquetas',
    cta: 'Ver etiquetas',
    img: '/etiqueta.png',
    description: 'Etiquetas y consumibles adaptados a cada aplicación, con la calidad de impresión que tu negocio necesita.',
    items: ['Etiquetas adhesivas', 'Ribbons', 'Brazaletes', 'Tarjetas'],
  },
  {
    title: 'Punto de Venta',
    cta: 'Ver soluciones TPV',
    img: '/tpv.png',
    description: 'Equipamiento completo de TPV para agilizar el cobro y mejorar la experiencia en el punto de venta.',
    items: ['Sistemas TPV', 'Displays de cliente', 'Cajones portamonedas', 'Impresoras de ticket'],
  },
]

export default function Products() {
  const [active, setActive] = useState(0)
  const [navOpen, setNavOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([])
  const panelRef = useRef<HTMLDivElement>(null)
  const [line, setLine] = useState({ top: 0, underlineLeft: 0, underlineWidth: 0, connectorLeft: 0, connectorWidth: 0 })

  function measure() {
    const content = contentRef.current
    const item = itemRefs.current[active]
    const panel = panelRef.current
    if (!content || !item || !panel) return
    const R = 20 // debe coincidir con el border-radius del panel (.pr-panel)
    const contentRect = content.getBoundingClientRect()
    const itemRect = item.getBoundingClientRect()
    const panelRect = panel.getBoundingClientRect()
    const top = itemRect.bottom - contentRect.top
    const underlineLeft = itemRect.left - contentRect.left
    const underlineWidth = itemRect.width
    const connectorLeft = itemRect.right - contentRect.left
    const panelTop = panelRect.top - contentRect.top
    const panelLeftFlat = panelRect.left - contentRect.left
    // El borde del panel es curvo cerca de las esquinas: si la línea cae dentro
    // de esa zona, calculamos dónde está realmente el borde en ese punto (círculo),
    // en vez de usar el borde plano, para que la conexión no deje hueco.
    const dy = top - panelTop
    const curveOffset = dy < R ? R - Math.sqrt(Math.max(R * R - Math.pow(R - dy, 2), 0)) : 0
    const panelEdge = panelLeftFlat + curveOffset
    setLine({ top, underlineLeft, underlineWidth, connectorLeft, connectorWidth: Math.max(panelEdge - connectorLeft, 0) })
  }

  useEffect(() => {
    measure()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, navOpen])

  useEffect(() => {
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!wrapperRef.current) return
      if (navOpen && !wrapperRef.current.contains(e.target as Node)) setNavOpen(false)
    }
    document.addEventListener('click', onDocClick)
    return () => document.removeEventListener('click', onDocClick)
  }, [navOpen])

  const current = products[active]

  return (
    <section id="productos" style={{ padding: '80px 20px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ marginBottom: '40px', maxWidth: '900px' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4.6vw, 46px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08, color: 'var(--text-primary)', margin: '0 0 14px' }}>
            Soluciones hardware para cada operación
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>
            Encuentra el hardware profesional que necesitas, desde lectores de código de barras y terminales móviles
            hasta impresoras, tablets industriales y consumibles, con soluciones adaptadas a cada sector.
          </p>
        </div>

        <div className="pr-content" ref={contentRef}>
          <div className="pr-underline" style={{ top: line.top, left: line.underlineLeft, width: line.underlineWidth }} />
          <div className="pr-connector" style={{ top: line.top, left: line.connectorLeft, width: line.connectorWidth }} />

          {/* ---------- Nav ---------- */}
          <div className="pr-nav-wrapper" ref={wrapperRef} data-open={navOpen}>
            <button type="button" className="pr-dropdown-trigger" aria-expanded={navOpen} onClick={() => setNavOpen((v) => !v)}>
              <span>{current.title}</span>
              <span className="pr-dropdown-chevron" aria-hidden="true">
                <svg viewBox="0 0 20 20" width="16" height="16" fill="none">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>

            <div className="pr-nav" role="tablist">
              {products.map((p, i) => (
                <button
                  key={p.title}
                  ref={(el) => { itemRefs.current[i] = el }}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  className={`pr-nav-item${active === i ? ' is-active' : ''}`}
                  onClick={() => { setActive(i); setNavOpen(false) }}
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>

          {/* ---------- Panel ---------- */}
          <div className="pr-panel-wrapper" ref={panelRef}>
            <div key={active} className="pr-panel">
              <div className="pr-image">
                <img src={current.img} alt={current.title} loading="lazy" />
              </div>
              <div className="pr-info">
                <p className="pr-description">{current.description}</p>
                <ul className="pr-list">
                  {current.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href="#contacto" className="pr-cta">{current.cta}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .pr-content {
          position: relative;
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 40px;
          align-items: center;
        }
        @media (max-width: 900px) { .pr-content { grid-template-columns: 1fr; gap: 16px; } }

        .pr-underline,
        .pr-connector {
          position: absolute;
          height: 2px;
          background: var(--navy);
          transition: top 0.35s ease, left 0.35s ease, width 0.35s ease;
          pointer-events: none;
        }
        @media (max-width: 900px) { .pr-underline, .pr-connector { display: none; } }

        .pr-nav-wrapper { position: relative; }

        .pr-dropdown-trigger { display: none; }
        @media (max-width: 900px) {
          .pr-dropdown-trigger {
            appearance: none;
            background: var(--white);
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 14px 18px;
            border: 1px solid var(--border);
            border-radius: 10px;
            font-size: 0.95rem;
            font-weight: 700;
            font-family: var(--font);
            color: var(--navy);
            cursor: pointer;
          }
          .pr-dropdown-chevron { display: inline-flex; color: var(--orange); transition: transform 0.25s ease; flex-shrink: 0; }
          .pr-nav-wrapper[data-open="true"] .pr-dropdown-chevron { transform: rotate(180deg); }
        }

        .pr-nav {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 26px;
          position: relative;
          padding-left: 22px;
        }
        .pr-nav::before {
          content: '';
          position: absolute;
          top: -14px; left: 0;
          width: 6px;
          height: calc(100% + 28px);
          background: var(--navy);
          border-radius: 3px;
        }
        @media (max-width: 900px) {
          .pr-nav {
            position: absolute;
            top: calc(100% + 8px);
            left: 0; right: 0;
            z-index: 20;
            padding: 6px 6px 6px 22px;
            max-height: 0;
            overflow: hidden;
            opacity: 0;
            pointer-events: none;
            background: var(--white);
            border: 1px solid var(--border);
            border-radius: 10px;
            box-shadow: 0 12px 28px rgba(10,22,40,0.1);
            transition: max-height 0.25s ease, opacity 0.2s ease;
          }
          .pr-nav::before { display: none; }
          .pr-nav-wrapper[data-open="true"] .pr-nav {
            max-height: 60vh;
            overflow-y: auto;
            opacity: 1;
            pointer-events: auto;
          }
        }

        .pr-nav-item {
          appearance: none;
          background: none;
          border: none;
          text-align: left;
          padding: 0 2px 6px;
          font-size: 1.1rem;
          font-weight: 700;
          font-family: var(--font);
          color: var(--navy);
          cursor: pointer;
          transition: color 0.2s ease;
          position: relative;
        }
        .pr-nav-item:hover { color: var(--orange); }
        .pr-nav-item.is-active { color: var(--orange); }

        @media (max-width: 900px) {
          .pr-nav-item.is-active::before {
            content: '';
            position: absolute;
            left: 2px;
            bottom: -2px;
            width: calc(100% - 4px);
            height: 2px;
            background: var(--navy);
            border-radius: 2px;
          }
        }

        .pr-panel-wrapper { position: relative; }
        .pr-panel {
          display: grid;
          grid-template-columns: 0.85fr 1fr;
          gap: 32px;
          align-items: center;
          border: 2px solid var(--navy);
          border-radius: 20px;
          padding: 32px;
          background: var(--white);
          opacity: 0;
          animation: pr-fade-in 0.35s ease forwards;
        }
        @keyframes pr-fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 900px) { .pr-panel { grid-template-columns: 1fr; gap: 20px; padding: 22px; } }

        .pr-image {
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: 14px;
          overflow: hidden;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pr-image img { width: 100%; height: 100%; object-fit: contain; padding: 16px; display: block; }

        .pr-description { font-size: 0.95rem; line-height: 1.65; color: var(--text-secondary); margin: 0 0 18px; }

        .pr-list { list-style: none; margin: 0 0 26px; padding: 0; display: flex; flex-direction: column; gap: 6px; }
        .pr-list li { font-size: 0.9rem; font-weight: 700; color: var(--text-primary); }

        .pr-cta {
          display: inline-flex;
          align-items: center;
          padding: 12px 24px;
          background: var(--orange);
          color: white;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }
        .pr-cta:hover { opacity: 0.88; }
      `}</style>
    </section>
  )
}
