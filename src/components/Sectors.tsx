'use client'
import { useState } from 'react'

const sectors = [
  {
    name: 'Logística', tag: 'Logística',
    desc: 'Gestión de almacén, picking optimizado, control de expediciones y visibilidad end-to-end de la cadena de suministro.',
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=85',
    alt: 'Almacén logístico con operarios',
    results: [{ n: '99.8%', l: 'precisión en picking' }, { n: '-68%', l: 'tiempo de inventario' }, { n: '3×', l: 'velocidad de expedición' }],
  },
  {
    name: 'Industria', tag: 'Industria',
    desc: 'Control de producción, OEE, trazabilidad de componentes y automatización de líneas con captura de datos en tiempo real.',
    img: 'https://images.unsplash.com/photo-1565793979-7e3de21b2f9a?w=800&q=85',
    alt: 'Línea de producción industrial',
    results: [{ n: '+22%', l: 'OEE productivo' }, { n: '100%', l: 'trazabilidad de lote' }, { n: '-40%', l: 'tiempo de reporte' }],
  },
  {
    name: 'Retail', tag: 'Retail',
    desc: 'Inventario en tiempo real, prevención de pérdidas con RFID, movilidad en punto de venta y experiencia omnicanal.',
    img: 'https://images.unsplash.com/photo-1481437156560-3205f66da3b6?w=800&q=85',
    alt: 'Retail moderno con tecnología',
    results: [{ n: '-35%', l: 'pérdida de stock' }, { n: '+18%', l: 'rotación inventario' }, { n: '100%', l: 'visibilidad en tiempo real' }],
  },
  {
    name: 'Healthcare', tag: 'Healthcare',
    desc: 'Trazabilidad de medicamentos, control de activos hospitalarios, identificación de pacientes y cumplimiento normativo.',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=85',
    alt: 'Entorno hospitalario con tecnología',
    results: [{ n: '-85%', l: 'tiempo de localización' }, { n: '+30%', l: 'utilización de activos' }, { n: '12 m.', l: 'ROI medio' }],
  },
  {
    name: 'Alimentación', tag: 'Alimentación',
    desc: 'Trazabilidad de lote, control de caducidades, gestión de temperatura y cumplimiento de normativa alimentaria.',
    img: 'https://images.unsplash.com/photo-1454944338482-a69bb95894af?w=800&q=85',
    alt: 'Industria alimentaria con control de calidad',
    results: [{ n: '100%', l: 'trazabilidad de lote' }, { n: '-50%', l: 'mermas por caducidad' }, { n: '+25%', l: 'velocidad de control' }],
  },
  {
    name: 'Transporte', tag: 'Transporte',
    desc: 'Control de flotas, gestión de envíos, captura de pruebas de entrega y visibilidad en tiempo real.',
    img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=85',
    alt: 'Flota de transporte logístico',
    results: [{ n: '+40%', l: 'eficiencia de entrega' }, { n: '-30%', l: 'incidencias en ruta' }, { n: '100%', l: 'trazabilidad de envíos' }],
  },
]

export default function Sectors() {
  const [active, setActive] = useState(0)
  const s = sectors[active]

  return (
    <section id="sectores" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '100px 48px' }}>
        <div className="section-tag">Sectores</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08 }}>
            Donde aportamos valor
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '320px', lineHeight: 1.7 }}>
            Más de dos décadas implantando soluciones en los entornos más exigentes.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '32px' }}>
          {sectors.map((sec, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              padding: '8px 18px', borderRadius: '100px', cursor: 'pointer',
              border: '1px solid', fontSize: '13px', fontWeight: 600,
              fontFamily: 'var(--font)',
              borderColor: active === i ? 'var(--navy)' : 'var(--border)',
              background: active === i ? 'var(--navy)' : 'transparent',
              color: active === i ? 'white' : 'var(--text-secondary)',
              transition: 'all 0.2s',
            }}>{sec.name}</button>
          ))}
        </div>

        {/* Content card */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', borderRadius: '16px', overflow: 'hidden' }}>
          {/* Left: info + resultados */}
          <div style={{ padding: '56px', background: 'var(--white)' }}>
            <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--orange)', letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: '12px' }}>{s.tag}</div>
            <h3 style={{ fontSize: '26px', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '16px' }}>{s.name}</h3>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '40px' }}>{s.desc}</p>

            {/* Resultados */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {s.results.map((r, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: '20px',
                  padding: '20px 0',
                  borderTop: i === 0 ? '1px solid var(--border)' : 'none',
                  borderBottom: '1px solid var(--border)',
                }}>
                  <div style={{ fontSize: '36px', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--navy)', minWidth: '110px', lineHeight: 1 }}>{r.n}</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{r.l}</div>
                </div>
              ))}
            </div>
            <a href="#contacto" style={{ display: 'inline-block', marginTop: '28px', fontSize: '14px', fontWeight: 600, color: 'var(--orange)' }}>
              Ver casos de uso →
            </a>
          </div>

          {/* Right: imagen del sector */}
          <div style={{ position: 'relative', overflow: 'hidden', minHeight: '420px' }}>
            <img
              src={s.img}
              alt={s.alt}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'opacity 0.4s' }}
            />
            {/* Tag flotante */}
            <div style={{
              position: 'absolute', top: '24px', left: '24px',
              background: 'rgba(26,35,71,0.92)', color: 'white',
              padding: '8px 16px', borderRadius: '100px',
              fontSize: '12px', fontWeight: 600, backdropFilter: 'blur(8px)',
            }}>{s.name}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
