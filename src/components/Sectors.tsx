'use client'
import { useState } from 'react'

const sectors = [
  { name: 'Logística', desc: 'Gestión de almacén, picking optimizado, control de expediciones y visibilidad end-to-end de la cadena de suministro.', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=533&fit=crop&crop=center&q=85', alt: 'Almacén logístico', results: [{ n: '99.8%', l: 'precisión en picking' }, { n: '-68%', l: 'tiempo de inventario' }, { n: '3×', l: 'velocidad de expedición' }] },
  { name: 'Industria', desc: 'Control de producción, OEE, trazabilidad de componentes y automatización de líneas con captura de datos en tiempo real.', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=533&fit=crop&crop=center&q=85', alt: 'Línea de producción industrial', results: [{ n: '+22%', l: 'OEE productivo' }, { n: '100%', l: 'trazabilidad de lote' }, { n: '-40%', l: 'tiempo de reporte' }] },
  { name: 'Retail', desc: 'Inventario en tiempo real, prevención de pérdidas con RFID, movilidad en punto de venta y experiencia omnicanal.', img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=533&fit=crop&crop=center&q=85', alt: 'Retail moderno', results: [{ n: '-35%', l: 'pérdida de stock' }, { n: '+18%', l: 'rotación inventario' }, { n: '100%', l: 'visibilidad real-time' }] },
  { name: 'Healthcare', desc: 'Trazabilidad de medicamentos, control de activos hospitalarios, identificación de pacientes y cumplimiento normativo.', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=533&fit=crop&crop=center&q=85', alt: 'Entorno hospitalario', results: [{ n: '-85%', l: 'tiempo de localización' }, { n: '+30%', l: 'utilización activos' }, { n: '12 m.', l: 'ROI medio' }] },
  { name: 'Alimentación', desc: 'Trazabilidad de lote, control de caducidades, gestión de temperatura y cumplimiento de normativa alimentaria.', img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=533&fit=crop&crop=center&q=85', alt: 'Industria alimentaria', results: [{ n: '100%', l: 'trazabilidad de lote' }, { n: '-50%', l: 'mermas por caducidad' }, { n: '+25%', l: 'velocidad control' }] },
  { name: 'Transporte', desc: 'Control de flotas, gestión de envíos, captura de pruebas de entrega y visibilidad en tiempo real.', img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=533&fit=crop&crop=center&q=85', alt: 'Flota de transporte', results: [{ n: '+40%', l: 'eficiencia entrega' }, { n: '-30%', l: 'incidencias ruta' }, { n: '100%', l: 'trazabilidad envíos' }] },
]

export default function Sectors() {
  const [active, setActive] = useState(0)
  const s = sectors[active]
  return (
    <>
      <section id="sectores" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 20px' }}>
          <div className="section-tag">Sectores</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08 }}>Donde aportamos valor</h2>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '320px', lineHeight: 1.7 }}>Más de dos décadas implantando soluciones en los entornos más exigentes.</p>
          </div>
          {/* Tabs */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '24px' }}>
            {sectors.map((sec, i) => (
              <button key={i} onClick={() => setActive(i)} style={{
                padding: '7px 14px', borderRadius: '100px', cursor: 'pointer',
                border: '1px solid', fontSize: '13px', fontWeight: 600, fontFamily: 'var(--font)',
                borderColor: active === i ? 'var(--navy)' : 'var(--border)',
                background: active === i ? 'var(--navy)' : 'transparent',
                color: active === i ? 'white' : 'var(--text-secondary)', transition: 'all 0.2s',
              }}>{sec.name}</button>
            ))}
          </div>
          {/* Content */}
          <div className="sector-grid" style={{ gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden' }}>
            <div style={{ padding: '40px 32px', background: 'var(--white)' }}>
              <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--orange)', letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: '10px' }}>{s.name}</div>
              <h3 style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '14px' }}>{s.name}</h3>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '32px' }}>{s.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {s.results.map((r, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 0', borderTop: i === 0 ? '1px solid var(--border)' : 'none', borderBottom: '1px solid var(--border)' }}>
                    <div style={{ fontSize: 'clamp(26px, 4vw, 36px)', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--navy)', minWidth: '90px', lineHeight: 1 }}>{r.n}</div>
                    <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{r.l}</div>
                  </div>
                ))}
              </div>
              <a href="#contacto" style={{ display: 'inline-block', marginTop: '24px', fontSize: '14px', fontWeight: 600, color: 'var(--orange)' }}>Ver casos de uso →</a>
            </div>
            {/* Imagen ratio 3:2 */}
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{ width: '100%', paddingBottom: '66.66%', position: 'relative' }}>
                <img key={s.img} src={s.img} alt={s.alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
                <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'rgba(26,35,71,0.88)', color: 'white', padding: '6px 14px', borderRadius: '100px', fontSize: '12px', fontWeight: 600 }}>{s.name}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        .sector-grid { display: grid; grid-template-columns: 1fr 1fr; }
        @media(max-width: 768px) { .sector-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  )
}
