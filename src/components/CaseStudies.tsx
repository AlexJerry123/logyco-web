'use client'
import { useEffect, useRef, useState } from 'react'

const sectorIcons: Record<string, React.JSX.Element> = {
  Logística: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 6.5h11v9h-11z" stroke="var(--orange)" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M13.5 10h3.7l3.3 3.3v2.2h-7z" stroke="var(--orange)" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="7" cy="18" r="1.8" stroke="var(--orange)" strokeWidth="1.8" />
      <circle cx="17" cy="18" r="1.8" stroke="var(--orange)" strokeWidth="1.8" />
    </svg>
  ),
  Industria: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 20V10l5 3.5V10l5 3.5V10l5 3.5V6.5l4-3.5V20z" stroke="var(--orange)" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M2.5 20h19" stroke="var(--orange)" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  Healthcare: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21s-8-4.9-8-11.2C4 6.6 6.4 4.5 9 4.5c1.5 0 2.5.7 3 1.5.5-.8 1.5-1.5 3-1.5 2.6 0 5 2.1 5 5.3 0 6.3-8 11.2-8 11.2z" stroke="var(--orange)" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 11h2.2l1-2 1.6 4 1-2H17" stroke="var(--orange)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

const cases = [
  { sector: 'Logística', company: 'Operador logístico nacional', challenge: 'Errores de picking superiores al 4% y cero visibilidad en tiempo real sobre el inventario.', solution: 'Terminales móviles con WMS integrado y sistema RFID para control de ubicaciones y expediciones.', results: [{ n: '99.8%', l: 'precisión en picking' }, { n: '-68%', l: 'tiempo de inventario' }, { n: '3×', l: 'velocidad de expedición' }] },
  { sector: 'Industria', company: 'Fabricante de componentes', challenge: 'Trazabilidad incompleta en línea de producción sin visibilidad OEE ni control de lote.', solution: 'Trazabilidad end-to-end con captura automática en cada fase del proceso productivo.', results: [{ n: '+22%', l: 'OEE productivo' }, { n: '100%', l: 'trazabilidad de lote' }, { n: '-40%', l: 'tiempo de reporte' }] },
  { sector: 'Healthcare', company: 'Red hospitalaria regional', challenge: 'Control manual de activos críticos con pérdidas frecuentes y tiempos de búsqueda elevados.', solution: 'RFID pasivo para localización en tiempo real de equipos médicos en toda la red hospitalaria.', results: [{ n: '-85%', l: 'tiempo de localización' }, { n: '+30%', l: 'utilización de activos' }, { n: '12 m.', l: 'retorno de inversión' }] },
]

// Descompone strings tipo "99.8%", "-68%", "3×", "12 m." en sus partes
// numérica y de formato, para poder animar el número manteniendo el resto.
function parseStat(raw: string) {
  const match = raw.match(/^([+-]?)(\d+(?:\.\d+)?)(.*)$/)
  if (!match) return { sign: '', value: 0, decimals: 0, suffix: raw }
  const [, sign, numStr, suffix] = match
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0
  return { sign, value: parseFloat(numStr), decimals, suffix }
}

function easeOutQuad(t: number) {
  return 1 - (1 - t) * (1 - t)
}

function AnimatedResult({ n, l, playToken, delay }: { n: string; l: string; playToken: number; delay: number }) {
  const parsed = parseStat(n)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf: number
    let start: number | null = null
    const duration = 1100
    setProgress(0)
    const timeout = setTimeout(() => {
      function tick(ts: number) {
        if (start === null) start = ts
        const elapsed = ts - start
        const t = Math.min(elapsed / duration, 1)
        setProgress(easeOutQuad(t))
        if (t < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, delay)
    return () => { clearTimeout(timeout); cancelAnimationFrame(raf) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playToken])

  const current = parsed.value * progress
  const formatted = parsed.decimals ? current.toFixed(parsed.decimals) : Math.round(current).toString()

  return (
    <div className="cs-result">
      <div className="cs-result-n">{parsed.sign}{formatted}{parsed.suffix}</div>
      <div className="cs-result-l">{l}</div>
    </div>
  )
}

export default function CaseStudies() {
  const [active, setActive] = useState(0)
  const [playToken, setPlayToken] = useState(0)
  const seenRef = useRef(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const c = cases[active]

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !seenRef.current) {
          seenRef.current = true
          setPlayToken((t) => t + 1)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  function handleSelect(i: number) {
    if (i === active) return
    setActive(i)
    if (seenRef.current) setPlayToken((t) => t + 1)
  }

  return (
    <>
      <section id="casos" style={{ padding: '80px 20px', background: 'var(--bg)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }} ref={sectionRef}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 4.6vw, 46px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08, maxWidth: '900px', margin: 0 }}>
              Resultados reales,<br />transformación demostrada
            </h2>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {cases.map((cas, i) => (
                <button key={i} onClick={() => handleSelect(i)} className="cs-tab" data-active={active === i}>
                  {cas.sector}
                </button>
              ))}
            </div>
          </div>

          <div key={active} className="cs-panel">
            <span className="cs-topbar" />
            <div className="cs-info">
              <div className="cs-sector">
                {sectorIcons[c.sector]}
                {c.sector}
              </div>
              <h3 className="cs-company">{c.company}</h3>
              <div style={{ marginBottom: '20px' }}>
                <div className="cs-label">Reto</div>
                <p className="cs-text">{c.challenge}</p>
              </div>
              <div>
                <div className="cs-label">Solución</div>
                <p className="cs-text">{c.solution}</p>
              </div>
            </div>
            <div className="cs-results-col">
              <div className="cs-label" style={{ marginBottom: '20px' }}>Resultados obtenidos</div>
              {c.results.map((r, i) => (
                <div key={i} style={{ borderBottom: i < c.results.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  <AnimatedResult n={r.n} l={r.l} playToken={playToken} delay={i * 120} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <style>{`
        .cs-tab {
          padding: 9px 18px;
          border-radius: 100px;
          cursor: pointer;
          border: 1px solid var(--border);
          font-size: 13px;
          font-weight: 600;
          font-family: var(--font);
          background: transparent;
          color: var(--text-secondary);
          transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;
        }
        .cs-tab:hover { border-color: var(--navy); color: var(--navy); }
        .cs-tab[data-active="true"] {
          border-color: var(--navy);
          background: var(--navy);
          color: white;
        }

        .cs-panel {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 32px rgba(10,22,40,0.07);
          opacity: 0;
          animation: cs-fade-in 0.4s ease forwards;
        }
        .cs-topbar {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background-image: linear-gradient(to right, #ff503d, #ff653a, #ff7838, #ff8939, #ff993d);
        }
        @keyframes cs-fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @media (max-width: 768px) { .cs-panel { grid-template-columns: 1fr; } }

        .cs-info { padding: 40px 36px; background: var(--white); }
        .cs-results-col { padding: 40px 36px; background: var(--white); border-left: 1px solid var(--border); display: flex; flex-direction: column; justify-content: center; }
        @media (max-width: 768px) { .cs-results-col { border-left: none; border-top: 1px solid var(--border); } }

        .cs-sector {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 700;
          color: var(--orange);
          letter-spacing: 0.09em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .cs-company { font-size: clamp(18px, 2.5vw, 22px); font-weight: 700; letter-spacing: -0.03em; margin: 0 0 24px; color: var(--text-primary); }
        .cs-label { font-size: 10px; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px; }
        .cs-text { font-size: 14px; color: var(--text-secondary); line-height: 1.7; margin: 0; }

        .cs-result { display: flex; align-items: center; gap: 16px; padding: 20px 0; }
        .cs-result-n { font-size: clamp(32px, 5vw, 44px); font-weight: 800; letter-spacing: -0.04em; color: var(--navy); min-width: 110px; line-height: 1; }
        .cs-result-l { font-size: 14px; color: var(--text-secondary); }
      `}</style>
    </>
  )
}
