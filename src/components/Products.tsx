'use client'
import { useState } from 'react'

const products = [
  {
    title: 'Impresoras',
    img: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=267&fit=crop&crop=center&q=80',
    items: ['Impresoras de etiquetas', 'Impresoras de tarjetas', 'Impresoras de brazaletes', 'Impresora de tiquets'],
  },
  {
    title: 'Lectores',
    img: 'https://images.unsplash.com/photo-1563770660941-10fec3dd3e1a?w=400&h=267&fit=crop&crop=center&q=80',
    items: ['Lectores de código de barras', 'Lectores de sobremesa', 'Lectores industriales', 'Lectores de tarjetas'],
  },
  {
    title: 'Terminales',
    img: 'https://images.unsplash.com/photo-1609078575318-d18a6d6bf64c?w=400&h=267&fit=crop&crop=center&q=80',
    items: ['Terminales portátiles', 'Tablets industriales', 'Terminales de carretilla', 'Notebooks'],
  },
  {
    title: 'Etiquetas',
    img: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=267&fit=crop&crop=center&q=80',
    items: ['Etiquetas adhesivas', 'Ribbons', 'Brazaletes', 'Tarjetas'],
  },
  {
    title: 'Punto de Venta',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=267&fit=crop&crop=center&q=80',
    items: ['Sistemas TPV', 'Displays de cliente', 'Cajones portamonedas', 'Impresoras de ticket'],
  },
]

export default function Products() {
  const [hov, setHov] = useState<number | null>(null)
  return (
    <>
      <section id="productos" style={{ padding: '80px 20px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '12px', marginBottom: '36px' }}>
          <div>
            <div className="section-tag">Productos populares</div>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08, color: 'var(--text-primary)' }}>
              Soluciones hardware<br />para cada operación
            </h2>
          </div>
          <a href="#contacto" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--orange)', whiteSpace: 'nowrap' }}>Ver catálogo completo →</a>
        </div>

        <div className="products-grid">
          {products.map((p, i) => (
            <div key={i}
              onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
              style={{
                border: `1px solid ${hov === i ? 'var(--navy)' : 'var(--border)'}`,
                borderRadius: '14px', overflow: 'hidden',
                transition: 'border-color 0.2s', cursor: 'default', background: 'var(--white)',
              }}>
              {/* Imagen ratio 3:2 */}
              <div style={{ width: '100%', paddingBottom: '66.66%', position: 'relative', background: 'var(--bg)' }}>
                <img src={p.img} alt={p.title}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
              </div>
              <div style={{ padding: '20px' }}>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '10px' }}>{p.title}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  {p.items.map((item, j) => (
                    <div key={j} style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'var(--orange)', flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .products-grid { display: grid; grid-template-columns: repeat(5,1fr); gap: 16px; }
        @media(max-width:1024px){ .products-grid { grid-template-columns: repeat(3,1fr); } }
        @media(max-width:640px){ .products-grid { grid-template-columns: repeat(2,1fr); } }
      `}</style>
    </>
  )
}
