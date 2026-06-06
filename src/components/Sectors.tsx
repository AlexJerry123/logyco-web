'use client'
import { useState } from 'react'

const sectors = [
  {
    name: 'Industria',
    desc: 'Control de producción, OEE, trazabilidad de componentes y automatización de líneas con captura de datos en tiempo real.',
    img: '🏭',
    color: '#0066ff',
  },
  {
    name: 'Logística',
    desc: 'Gestión de almacén, picking optimizado, control de expediciones y visibilidad end-to-end de la cadena de suministro.',
    img: '📦',
    color: '#00d4ff',
  },
  {
    name: 'Retail',
    desc: 'Inventario en tiempo real, prevención de pérdidas con RFID, movilidad en punto de venta y experiencia omnicanal.',
    img: '🛒',
    color: '#7c3aed',
  },
  {
    name: 'Healthcare',
    desc: 'Trazabilidad de medicamentos, control de activos hospitalarios, identificación de pacientes y cumplimiento normativo.',
    img: '🏥',
    color: '#10b981',
  },
  {
    name: 'Alimentación',
    desc: 'Trazabilidad de lote, control de caducidades, gestión de temperatura y cumplimiento de normativa alimentaria.',
    img: '🌾',
    color: '#f59e0b',
  },
  {
    name: 'Transporte',
    desc: 'Control de flotas, gestión de envíos, captura de pruebas de entrega y visibilidad en tiempo real del transporte.',
    img: '🚚',
    color: '#ef4444',
  },
]

export default function Sectors() {
  const [active, setActive] = useState(0)
  const current = sectors[active]

  return (
    <section id="sectores" style={{
      padding: '120px 40px',
      background: 'var(--deep)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
        opacity: 0.3,
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '64px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '4px 14px',
              background: 'var(--accent-dim)',
              border: '1px solid rgba(0,212,255,0.15)',
              borderRadius: '100px',
              marginBottom: '20px',
            }}>
              <span style={{ fontFamily: 'var(--font-syne)', fontSize: '11px', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Sectores
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800 }}>
              Donde aportamos{' '}
              <span style={{ color: 'var(--accent)' }}>valor</span>
            </h2>
          </div>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '360px', lineHeight: 1.7, fontWeight: 300 }}>
            Más de dos décadas implantando soluciones tecnológicas en los entornos más exigentes.
          </p>
        </div>

        {/* Selector tabs */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '48px' }}>
          {sectors.map((s, i) => (
            <button
              key={s.name}
              onClick={() => setActive(i)}
              style={{
                padding: '10px 22px',
                border: `1px solid ${active === i ? s.color : 'var(--border)'}`,
                borderRadius: '100px',
                background: active === i ? `${s.color}18` : 'transparent',
                color: active === i ? s.color : 'var(--text-secondary)',
                fontFamily: 'var(--font-syne)', fontSize: '13px', fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.25s',
              }}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Content card */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2px',
          background: 'var(--border)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          minHeight: '300px',
        }}>
          {/* Left: info */}
          <div style={{ padding: '60px', background: 'var(--card)' }}>
            <div style={{ fontSize: '64px', marginBottom: '24px' }}>{current.img}</div>
            <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '32px', fontWeight: 800, marginBottom: '16px', color: current.color }}>
              {current.name}
            </h3>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, fontWeight: 300, marginBottom: '32px' }}>
              {current.desc}
            </p>
            <a href="#" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              fontFamily: 'var(--font-syne)', fontSize: '13px', fontWeight: 600,
              color: current.color,
            }}>
              Ver casos de uso
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Right: visual */}
          <div style={{
            padding: '60px',
            background: `radial-gradient(ellipse at 70% 50%, ${current.color}15 0%, var(--surface) 70%)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative',
          }}>
            {/* Concentric rings */}
            {[180, 130, 80].map((size, i) => (
              <div key={i} style={{
                position: 'absolute',
                width: `${size}px`, height: `${size}px`,
                border: `1px solid ${current.color}${i === 0 ? '15' : i === 1 ? '25' : '40'}`,
                borderRadius: '50%',
                transition: 'border-color 0.4s',
              }} />
            ))}
            <div style={{
              width: '60px', height: '60px',
              background: `${current.color}20`,
              border: `1px solid ${current.color}60`,
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '28px',
            }}>
              {current.img}
            </div>

            {/* Floating stats */}
            <div style={{
              position: 'absolute', top: '40px', right: '40px',
              padding: '12px 18px',
              background: 'var(--card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              fontFamily: 'var(--font-syne)',
            }}>
              <div style={{ fontSize: '20px', fontWeight: 800, color: current.color }}>+{(active + 1) * 12}%</div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>Eficiencia media</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
