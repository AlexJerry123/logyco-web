'use client'
import { useState } from 'react'

const capabilities = [
  { icon: '📱', title: 'Movilidad Industrial', desc: 'Terminales robustos, ordenadores de mano y soluciones móviles para entornos exigentes de producción y logística.', tag: 'Hardware & Software' },
  { icon: '📡', title: 'RFID', desc: 'Implantación de sistemas RFID para control de inventario, acceso y trazabilidad en tiempo real a lo largo de toda la cadena.', tag: 'Identificación automática' },
  { icon: '📊', title: 'Trazabilidad', desc: 'Control total del ciclo de vida del producto, desde la recepción hasta la entrega, con visibilidad completa en cada punto.', tag: 'Control de procesos' },
  { icon: '🖨️', title: 'Impresión y Etiquetado', desc: 'Soluciones de impresión industrial y etiquetado inteligente integradas con tus sistemas ERP y WMS existentes.', tag: 'Automatización' },
  { icon: '⚙️', title: 'Automatización Operativa', desc: 'Integración de procesos operativos mediante captura de datos automática para reducir errores y optimizar tiempos.', tag: 'Eficiencia operacional' },
  { icon: '🛠️', title: 'Servicios y Soporte', desc: 'Mantenimiento preventivo, soporte técnico, formación especializada y gestión integral del ciclo de vida del dispositivo.', tag: 'Servicio 360°' },
]

export default function Capabilities() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="soluciones" style={{ padding: '100px 48px', maxWidth: '1200px', margin: '0 auto' }}>
      <div className="section-label">Nuestras capacidades</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '64px' }}>
        <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, maxWidth: '520px' }}>
          Soluciones para cada punto crítico de tu operativa
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '340px', lineHeight: 1.7 }}>
          Tecnología seleccionada e implantada por especialistas con más de 20 años de experiencia en el sector.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--border)' }}>
        {capabilities.map((cap, i) => (
          <div key={cap.title}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              padding: '40px 36px',
              background: hovered === i ? 'var(--bg)' : 'var(--white)',
              transition: 'background 0.2s',
              cursor: 'default',
            }}
          >
            <div style={{ fontSize: '28px', marginBottom: '20px' }}>{cap.icon}</div>
            <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>
              {cap.tag}
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: '12px', color: 'var(--text-primary)' }}>
              {cap.title}
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {cap.desc}
            </p>
            <div style={{
              marginTop: '24px', fontSize: '13px', fontWeight: 500,
              color: hovered === i ? 'var(--orange)' : 'var(--text-muted)',
              transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '4px',
            }}>
              Saber más →
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
