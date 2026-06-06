'use client'
import { useState } from 'react'

const sectors = [
  { name: 'Industria', desc: 'Control de producción, OEE, trazabilidad de componentes y automatización de líneas con captura de datos en tiempo real.', icon: '🏭', stat: '+22%', statLabel: 'OEE medio' },
  { name: 'Logística', desc: 'Gestión de almacén, picking optimizado, control de expediciones y visibilidad end-to-end de la cadena de suministro.', icon: '📦', stat: '99.8%', statLabel: 'precisión picking' },
  { name: 'Retail', desc: 'Inventario en tiempo real, prevención de pérdidas con RFID, movilidad en punto de venta y experiencia omnicanal.', icon: '🛒', stat: '-35%', statLabel: 'pérdida de stock' },
  { name: 'Healthcare', desc: 'Trazabilidad de medicamentos, control de activos hospitalarios, identificación de pacientes y cumplimiento normativo.', icon: '🏥', stat: '-85%', statLabel: 'tiempo localización' },
  { name: 'Alimentación', desc: 'Trazabilidad de lote, control de caducidades, gestión de temperatura y cumplimiento de normativa alimentaria.', icon: '🌾', stat: '100%', statLabel: 'trazabilidad lote' },
  { name: 'Transporte', desc: 'Control de flotas, gestión de envíos, captura de pruebas de entrega y visibilidad en tiempo real del transporte.', icon: '🚚', stat: '+40%', statLabel: 'eficiencia entrega' },
]

export default function Sectors() {
  const [active, setActive] = useState(0)
  const s = sectors[active]

  return (
    <section id="sectores" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 48px' }}>
        <div className="section-label">Sectores</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '56px' }}>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Donde aportamos valor
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '340px', lineHeight: 1.7 }}>
            Más de dos décadas implantando soluciones en los entornos operativos más exigentes.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '4px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {sectors.map((sec, i) => (
            <button key={sec.name} onClick={() => setActive(i)} style={{
              padding: '8px 18px',
              border: '1px solid',
              borderColor: active === i ? 'var(--text-primary)' : 'var(--border)',
              borderRadius: '100px',
              background: active === i ? 'var(--text-primary)' : 'transparent',
              color: active === i ? 'var(--white)' : 'var(--text-secondary)',
              fontFamily: 'var(--font-inter)', fontSize: '13px', fontWeight: 500,
              cursor: 'pointer', transition: 'all 0.2s',
            }}>{sec.name}</button>
          ))}
        </div>

        {/* Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden' }}>
          <div style={{ padding: '56px', background: 'var(--white)' }}>
            <div style={{ fontSize: '48px', marginBottom: '24px' }}>{s.icon}</div>
            <h3 style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '16px' }}>{s.name}</h3>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '32px' }}>{s.desc}</p>
            <a href="#contacto" style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)',
              borderBottom: '1px solid var(--border-strong)', paddingBottom: '2px',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--text-primary)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-strong)'}
            >
              Ver casos de uso →
            </a>
          </div>

          <div style={{ padding: '56px', background: 'var(--bg)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Resultado típico
            </div>
            <div style={{ fontSize: '72px', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--text-primary)', lineHeight: 1 }}>
              {s.stat}
            </div>
            <div style={{ fontSize: '15px', color: 'var(--text-secondary)', marginTop: '8px' }}>
              {s.statLabel}
            </div>

            <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
              {['Implementación guiada', 'Integración con ERP/WMS', 'Soporte post-implantación'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                  <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'var(--orange-light)', border: '1px solid rgba(255,77,58,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--orange)' }} />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
