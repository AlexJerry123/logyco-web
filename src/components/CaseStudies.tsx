'use client'
import { useState } from 'react'

const cases = [
  {
    sector: 'Logística', company: 'Operador logístico nacional',
    challenge: 'Errores de picking superiores al 4% y cero visibilidad en tiempo real sobre el inventario.',
    solution: 'Terminales móviles con WMS integrado y sistema RFID para control de ubicaciones y expediciones.',
    results: [{ n: '99.8%', l: 'precisión en picking' }, { n: '-68%', l: 'tiempo de inventario' }, { n: '3×', l: 'velocidad de expedición' }],
  },
  {
    sector: 'Industria', company: 'Fabricante de componentes',
    challenge: 'Trazabilidad incompleta en línea de producción sin visibilidad OEE ni control de lote.',
    solution: 'Trazabilidad end-to-end con captura automática en cada fase del proceso productivo.',
    results: [{ n: '+22%', l: 'OEE productivo' }, { n: '100%', l: 'trazabilidad de lote' }, { n: '-40%', l: 'tiempo de reporte' }],
  },
  {
    sector: 'Healthcare', company: 'Red hospitalaria regional',
    challenge: 'Control manual de activos críticos con pérdidas frecuentes y tiempos de búsqueda elevados.',
    solution: 'RFID pasivo para localización en tiempo real de equipos médicos en toda la red hospitalaria.',
    results: [{ n: '-85%', l: 'tiempo de localización' }, { n: '+30%', l: 'utilización de activos' }, { n: '12 m.', l: 'retorno de inversión' }],
  },
]

export default function CaseStudies() {
  const [active, setActive] = useState(0)
  const c = cases[active]

  return (
    <section id="casos" style={{ padding: '100px 48px', maxWidth: '1280px', margin: '0 auto' }}>
      <div className="section-tag">Casos de éxito</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '40px' }}>
        <h2 style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08 }}>
          Resultados reales,<br />transformación demostrada
        </h2>
        <div style={{ display: 'flex', gap: '6px' }}>
          {cases.map((cas, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              padding: '8px 18px', borderRadius: '100px', cursor: 'pointer',
              border: '1px solid', fontSize: '13px', fontWeight: 600,
              fontFamily: 'var(--font)',
              borderColor: active === i ? 'var(--navy)' : 'var(--border)',
              background: active === i ? 'var(--navy)' : 'transparent',
              color: active === i ? 'white' : 'var(--text-secondary)',
              transition: 'all 0.2s',
            }}>{cas.sector}</button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden' }}>
        {/* Left */}
        <div style={{ padding: '56px', background: 'var(--white)' }}>
          <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--orange)', letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: '10px' }}>{c.sector}</div>
          <h3 style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '32px' }}>{c.company}</h3>

          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Reto</div>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{c.challenge}</p>
          </div>
          <div>
            <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Solución</div>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{c.solution}</p>
          </div>
        </div>

        {/* Right: métricas */}
        <div style={{ padding: '56px', background: 'var(--bg)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '32px' }}>Resultados obtenidos</div>
          {c.results.map((r, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '20px',
              padding: '24px 0',
              borderBottom: i < c.results.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
              <div style={{ fontSize: '44px', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--navy)', minWidth: '130px', lineHeight: 1 }}>{r.n}</div>
              <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{r.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
