'use client'
import { useState } from 'react'

const cases = [
  {
    sector: 'Logística', company: 'Operador Logístico Nacional',
    challenge: 'Visibilidad cero en la cadena de suministro y errores de picking superiores al 4%.',
    solution: 'Implementación de terminales móviles Zebra con sistema RFID y WMS integrado.',
    results: [{ metric: '99.8%', label: 'precisión en picking' }, { metric: '-68%', label: 'tiempo de inventario' }, { metric: '3x', label: 'velocidad de expedición' }],
    color: '#ff4d3a',
  },
  {
    sector: 'Industria', company: 'Fabricante de Componentes',
    challenge: 'Trazabilidad incompleta en línea de producción y falta de visibilidad OEE.',
    solution: 'Solución de trazabilidad end-to-end con captura automática de datos en cada fase del proceso.',
    results: [{ metric: '+22%', label: 'OEE productivo' }, { metric: '100%', label: 'trazabilidad lote' }, { metric: '-40%', label: 'tiempo de reporte' }],
    color: '#1a2347',
  },
  {
    sector: 'Healthcare', company: 'Red Hospitalaria Regional',
    challenge: 'Control manual de activos críticos con pérdidas y tiempos de búsqueda elevados.',
    solution: 'Sistema RFID pasivo para localización en tiempo real de equipos médicos críticos.',
    results: [{ metric: '-85%', label: 'tiempo localización' }, { metric: '+30%', label: 'utilización activos' }, { metric: '12 meses', label: 'retorno inversión' }],
    color: '#10b981',
  },
]

export default function CaseStudies() {
  const [active, setActive] = useState(0)
  const c = cases[active]

  return (
    <section id="casos" style={{ padding: '120px 40px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '64px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px 14px', background: 'var(--orange-dim)', border: '1px solid rgba(255,77,58,0.2)', borderRadius: '100px', marginBottom: '20px' }}>
          <span style={{ fontFamily: 'var(--font-syne)', fontSize: '11px', fontWeight: 600, color: 'var(--orange)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Casos de éxito</span>
        </div>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, maxWidth: '600px', lineHeight: 1.1 }}>
          Resultados reales, <span style={{ color: 'var(--orange)' }}>transformación</span> demostrada
        </h2>
      </div>

      <div style={{ display: 'flex', gap: '2px', background: 'var(--border)', borderRadius: '12px', padding: '2px', marginBottom: '32px', width: 'fit-content' }}>
        {cases.map((cas, i) => (
          <button key={i} onClick={() => setActive(i)} style={{
            padding: '10px 24px', borderRadius: '10px', border: 'none',
            background: active === i ? 'var(--surface)' : 'transparent',
            color: active === i ? 'var(--text-primary)' : 'var(--text-muted)',
            fontFamily: 'var(--font-syne)', fontSize: '13px', fontWeight: 600,
            cursor: 'pointer', transition: 'all 0.2s',
          }}>{cas.sector}</button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', background: 'var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
        <div style={{ padding: '56px', background: 'var(--card)' }}>
          <div style={{ display: 'inline-block', padding: '4px 12px', background: `${c.color}18`, border: `1px solid ${c.color}40`, borderRadius: '100px', marginBottom: '24px' }}>
            <span style={{ fontFamily: 'var(--font-syne)', fontSize: '11px', fontWeight: 600, color: c.color, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{c.sector}</span>
          </div>
          <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '22px', fontWeight: 700, marginBottom: '32px' }}>{c.company}</h3>
          <div style={{ marginBottom: '24px' }}>
            <div style={{ fontFamily: 'var(--font-syne)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Reto</div>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300 }}>{c.challenge}</p>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-syne)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>Solución</div>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300 }}>{c.solution}</p>
          </div>
        </div>

        <div style={{ padding: '56px', background: `radial-gradient(ellipse at 30% 50%, ${c.color}12 0%, var(--surface) 70%)`, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontFamily: 'var(--font-syne)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '40px' }}>Resultados obtenidos</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {c.results.map((r, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <div style={{ fontFamily: 'var(--font-syne)', fontSize: '40px', fontWeight: 800, color: c.color, lineHeight: 1, minWidth: '120px' }}>{r.metric}</div>
                <div style={{ width: '1px', height: '40px', background: 'var(--border)' }} />
                <div style={{ fontSize: '14px', color: 'var(--text-secondary)', fontWeight: 300 }}>{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
