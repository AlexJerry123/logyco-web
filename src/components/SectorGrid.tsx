'use client'
import { useState } from 'react'

const sectors = [
  { name: 'Almacenamiento y Distribucion', desc: 'Hardware robusto para cada paso del almacen.', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=267&fit=crop&crop=center&q=80' },
  { name: 'Comercio Minorista', desc: 'TPV, lectores y dispositivos moviles para tienda.', img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=267&fit=crop&crop=center&q=80' },
  { name: 'Transporte y Logistica', desc: 'Trazabilidad y datos en tiempo real en ruta.', img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=267&fit=crop&crop=center&q=80' },
  { name: 'Sanidad', desc: 'Dispositivos seguros para entornos hospitalarios.', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=267&fit=crop&crop=center&q=80' },
  { name: 'Fabricacion', desc: 'Impresoras, lectores y tablets en linea de produccion.', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=267&fit=crop&crop=center&q=80' },
  { name: 'Alimentacion', desc: 'Trazabilidad de lote y control de caducidades.', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=267&fit=crop&crop=center&q=80' },
  { name: 'Sector Publico', desc: 'Identificacion segura y gestion de activos publicos.', img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=267&fit=crop&crop=center&q=80' },
  { name: 'Viajes y Ocio', desc: 'Gestion de entradas, accesos y experiencia de cliente.', img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=267&fit=crop&crop=center&q=80' },
]

export default function SectorGrid() {
  const [hov, setHov] = useState<number | null>(null)
  return (
    <>
      <section id="sectores" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="section-tag">Sectores</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '12px', marginBottom: '36px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08 }}>Donde aportamos valor</h2>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', maxWidth: '320px', lineHeight: 1.7 }}>Mas de dos decadas implantando soluciones en los entornos mas exigentes.</p>
          </div>
          <div className="sector-grid-2">
            {sectors.map((s, i) => (
              <div key={i}
                onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
                style={{
                  border: `1px solid ${hov === i ? 'var(--navy)' : 'var(--border)'}`,
                  borderRadius: '12px', overflow: 'hidden',
                  background: 'var(--white)', transition: 'border-color 0.2s, transform 0.2s',
                  transform: hov === i ? 'translateY(-2px)' : 'none',
                }}>
                <div style={{ width: '100%', paddingBottom: '66.66%', position: 'relative', background: 'var(--navy)' }}>
                  <img src={s.img} alt={s.name}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transition: 'opacity 0.3s', opacity: hov === i ? 0.85 : 1 }} />
                </div>
                <div style={{ padding: '16px 18px' }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '5px' }}>{s.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        .sector-grid-2 { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
        @media(max-width:1024px){ .sector-grid-2 { grid-template-columns: repeat(3,1fr); } }
        @media(max-width:640px){ .sector-grid-2 { grid-template-columns: repeat(2,1fr); } }
        @media(max-width:400px){ .sector-grid-2 { grid-template-columns: 1fr; } }
      `}</style>
    </>
  )
}
