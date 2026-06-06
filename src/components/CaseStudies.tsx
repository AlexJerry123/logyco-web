'use client'
import { useState } from 'react'

const cases = [
  {
    sector: 'Logística', company: 'Operador logístico nacional',
    challenge: 'Errores de picking superiores al 4% y cero visibilidad en tiempo real sobre el estado del inventario.',
    solution: 'Terminales móviles con WMS integrado y sistema RFID para control de ubicaciones y expediciones.',
    results: [{ metric: '99.8%', label: 'precisión en picking' }, { metric: '-68%', label: 'tiempo de inventario' }, { metric: '3×', label: 'velocidad de expedición' }],
  },
  {
    sector: 'Industria', company: 'Fabricante de componentes',
    challenge: 'Trazabilidad incompleta en línea de producción sin visibilidad OEE ni control de lote en tiempo real.',
    solution: 'Solución de trazabilidad end-to-end con captura automática en cada fase del proceso productivo.',
    results: [{ metric: '+22%', label: 'OEE productivo' }, { metric: '100%', label: 'trazabilidad de lote' }, { metric: '-40%', label: 'tiempo de reporte' }],
  },
  {
    sector: 'Healthcare', company: 'Red hospitalaria regional',
    challenge: 'Control manual de activos críticos con pérdidas frecuentes y tiempos de búsqueda elevados.',
    solution: 'Sistema RFID pasivo para localización en tiempo real de equipos médicos en toda la red.',
    results: [{ metric: '-85%', label: 'tiempo de localización' }, { metric: '+30%', label: 'utilización de activos' }, { metric: '12 m.', label: 'retorno de inversión' }],
  },
]

export default function CaseStudies() {
  const [active, setActive] = useState(0)
  const c = cases[active]

  return (
    <section id="casos" style={{ padding: '100px 48px', maxWidth: '1200px', margin: '0 auto' }}>
      <div className="section-label">Casos de éxito</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '56px' }}>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
          Resultados reales,<br />transformación demostrada
        </h2>
        <div style={{ display: 'flex', gap: '4px' }}>
          {cases.map((cas, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              padding: '8px 18px', border: '1px solid',
              borderColor: active === i ? 'var(--text-primary)' : 'var(--border)',
              borderRadius: '100px',
              background: active === i ? 'var(--text-primary)' : 'transparent',
              color: active === i ? 'var(--white)' : 'var(--text-secondary)',
              fontFamily: 'var(--font-inter)', fontSize: '13px', fontWeight: 500,
              cursor: 'pointer', transition: 'all 0.2s',
            }}>{cas.sector}</button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden' }}>
        {/* Left */}
        <div style={{ padding: '56px', background: 'var(--white)' }}>
          <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--orange)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '12px' }}>
            {c.sector}
          </div>
          <h3 style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '32px' }}>{c.company}</h3>

          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>Reto</div>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{c.challenge}</p>
          </div>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>Solución</div>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{c.solution}</p>
          </div>
        </div>

        {/* Right */}
        <div style={{ padding: '56px', background: 'var(--bg)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '32px' }}>
          <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Resultados obtenidos
          </div>
          {c.results.map((r, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '20px', paddingBottom: '32px', borderBottom: i < c.results.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--text-primary)', lineHeight: 1, minWidth: '130px' }}>
                {r.metric}
              </div>
              <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{r.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
