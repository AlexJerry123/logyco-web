'use client'
import { useState } from 'react'

const capabilities = [
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M9 7h6M9 11h6M9 15h4"/></svg>),
    title: 'Movilidad Industrial',
    desc: 'Terminales robustos, ordenadores de mano y soluciones móviles para entornos exigentes de producción y logística.',
    tag: 'Hardware & Software',
  },
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>),
    title: 'RFID',
    desc: 'Implantación de sistemas RFID para control de inventario, acceso y trazabilidad en tiempo real.',
    tag: 'Identificación automática',
  },
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h4l3-9 4 18 3-9h4"/></svg>),
    title: 'Trazabilidad',
    desc: 'Control total del ciclo de vida del producto, desde la recepción hasta la entrega, con visibilidad completa.',
    tag: 'Control de procesos',
  },
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>),
    title: 'Impresión y Etiquetado',
    desc: 'Soluciones de impresión industrial y etiquetado inteligente integradas con tus sistemas ERP y WMS.',
    tag: 'Automatización',
  },
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>),
    title: 'Automatización Operativa',
    desc: 'Integración de procesos operativos mediante soluciones de captura de datos para reducir errores y tiempos.',
    tag: 'Eficiencia operacional',
  },
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>),
    title: 'Servicios y Soporte',
    desc: 'Mantenimiento preventivo, soporte técnico, formación especializada y gestión integral del ciclo de vida.',
    tag: 'Servicio 360°',
  },
]

export default function Capabilities() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="soluciones" style={{ padding: '120px 40px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '72px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '4px 14px',
          background: 'var(--orange-dim)',
          border: '1px solid rgba(255,77,58,0.2)',
          borderRadius: '100px', marginBottom: '20px',
        }}>
          <span style={{ fontFamily: 'var(--font-syne)', fontSize: '11px', fontWeight: 600, color: 'var(--orange)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Nuestras capacidades
          </span>
        </div>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, maxWidth: '600px', lineHeight: 1.1 }}>
          Soluciones para cada{' '}
          <span style={{ color: 'var(--orange)' }}>punto crítico</span>{' '}
          de tu operativa
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '2px',
        background: 'var(--border)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
      }}>
        {capabilities.map((cap, i) => (
          <div key={cap.title}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              padding: '40px',
              background: hovered === i ? 'var(--surface)' : 'var(--card)',
              transition: 'background 0.3s',
              cursor: 'default', position: 'relative', overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
              background: 'var(--gradient-accent)',
              opacity: hovered === i ? 1 : 0, transition: 'opacity 0.3s',
            }} />
            <div style={{
              width: '48px', height: '48px',
              background: hovered === i ? 'var(--orange-dim)' : 'rgba(255,255,255,0.04)',
              border: `1px solid ${hovered === i ? 'rgba(255,77,58,0.3)' : 'var(--border)'}`,
              borderRadius: '12px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: hovered === i ? 'var(--orange)' : 'var(--text-muted)',
              marginBottom: '24px', transition: 'all 0.3s',
            }}>
              {cap.icon}
            </div>
            <div style={{ fontFamily: 'var(--font-syne)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
              {cap.tag}
            </div>
            <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>{cap.title}</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 300 }}>{cap.desc}</p>
            <div style={{
              marginTop: '28px', display: 'inline-flex', alignItems: 'center', gap: '6px',
              fontFamily: 'var(--font-syne)', fontSize: '13px', fontWeight: 600,
              color: hovered === i ? 'var(--orange)' : 'var(--text-muted)', transition: 'color 0.3s',
            }}>
              Saber más
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
