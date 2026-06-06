'use client'
import { useState } from 'react'

const caps = [
  { icon: '📱', title: 'Movilidad Industrial', desc: 'Terminales robustos y ordenadores de mano para entornos exigentes de producción y logística.', tag: 'Hardware & Software' },
  { icon: '📡', title: 'RFID', desc: 'Sistemas RFID para control de inventario, acceso y trazabilidad en tiempo real.', tag: 'Identificación automática' },
  { icon: '📊', title: 'Trazabilidad', desc: 'Control total del ciclo de vida del producto desde la recepción hasta la entrega.', tag: 'Control de procesos' },
  { icon: '🖨️', title: 'Impresión y Etiquetado', desc: 'Impresión industrial y etiquetado inteligente integrado con ERP y WMS.', tag: 'Automatización' },
  { icon: '⚙️', title: 'Automatización Operativa', desc: 'Captura de datos automática para reducir errores y optimizar tiempos operativos.', tag: 'Eficiencia operacional' },
  { icon: '🛠️', title: 'Servicios y Soporte', desc: 'Mantenimiento preventivo, soporte técnico y formación especializada.', tag: 'Servicio 360°' },
]

export default function Capabilities() {
  const [hov, setHov] = useState<number | null>(null)

  return (
    <section id="soluciones" style={{ padding: '100px 48px', maxWidth: '1280px', margin: '0 auto' }}>
      <div className="section-tag">Nuestras capacidades</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '56px' }}>
        <h2 style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08, maxWidth: '480px' }}>
          Soluciones para cada punto crítico de tu operativa
        </h2>
        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '320px', lineHeight: 1.7 }}>
          Tecnología implantada por especialistas con más de 20 años de experiencia en el sector.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden' }}>
        {caps.map((c, i) => (
          <div key={i}
            onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
            style={{ padding: '40px 36px', background: hov === i ? 'var(--bg)' : 'var(--white)', transition: 'background 0.2s', position: 'relative' }}
          >
            {hov === i && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'var(--orange)' }} />}
            <div style={{ fontSize: '28px', marginBottom: '18px' }}>{c.icon}</div>
            <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>{c.tag}</div>
            <h3 style={{ fontSize: '17px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '10px' }}>{c.title}</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{c.desc}</p>
            <div style={{ marginTop: '20px', fontSize: '13px', fontWeight: 600, color: hov === i ? 'var(--orange)' : 'var(--text-muted)', transition: 'color 0.2s' }}>
              Saber más →
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
