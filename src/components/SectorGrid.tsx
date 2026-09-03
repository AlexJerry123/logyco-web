'use client'

type Sector = {
    title: string
    descriptionHtml: string
    image: string
}

const sectors: Sector[] = [
    {
        title: 'Almacenamiento y Distribución',
        descriptionHtml:
            '<p>Ordenadores móviles robustos, lectores de código de barras, impresoras de etiquetas y soluciones RFID con visibilidad en tiempo real de cada proceso.</p>',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=1000&fit=crop&crop=center&q=85',
    },
    {
        title: 'Fabricación',
        descriptionHtml:
            '<p>Lectores robustos, impresoras industriales y tablets resistentes con trazabilidad de componentes por lote y control de OEE en tiempo real.</p>',
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=1000&fit=crop&crop=center&q=85',
    },
    {
        title: 'Comercio Minorista',
        descriptionHtml:
            '<p>Terminales de punto de venta, lectores de mano y dispositivos móviles con inventario en tiempo real y prevención de pérdidas mediante RFID.</p>',
        image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=1000&fit=crop&crop=center&q=85',
    },
    {
        title: 'Sanidad',
        descriptionHtml:
            '<p>Identificación segura de pacientes, control de activos hospitalarios y trazabilidad de medicamentos de principio a fin.</p>',
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=1000&fit=crop&crop=center&q=85',
    },
    {
        title: 'Alimentación',
        descriptionHtml:
            '<p>Control de lotes, gestión de caducidades y monitorización de temperatura durante toda la cadena de trazabilidad alimentaria.</p>',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=1000&fit=crop&crop=center&q=85',
    },
    {
        title: 'Transporte y Logística',
        descriptionHtml:
            '<p>Control de flotas, gestión de envíos y captura digital de pruebas de entrega con trazabilidad completa de cada expedición.</p>',
        image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=1000&fit=crop&crop=center&q=85',
    },
    {
        title: 'Sector Público',
        descriptionHtml:
            '<p>Identificación segura de ciudadanos, control de expedientes y gestión de activos e inventario en organismos públicos.</p>',
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=1000&fit=crop&crop=center&q=85',
    },
    {
        title: 'Viajes y Ocio',
        descriptionHtml:
            '<p>Gestión de entradas, control de accesos y dispositivos móviles que agilizan la experiencia del cliente en cada punto de contacto.</p>',
        image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=1000&fit=crop&crop=center&q=85',
    },
]

export default function SectorGrid() {
    return (
        <section id="sectores" style={{ background: '#f5f5f5', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 24px', width: '100%' }}>
                <div style={{ marginBottom: '32px' }}>
                    <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, letterSpacing: '-0.04em', color: 'var(--navy)', margin: '0 0 12px' }}>
                        Donde aportamos valor
                    </h2>
                    <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '560px', margin: 0 }}>
                        Más de dos décadas implantando soluciones en los entornos más exigentes.
                    </p>
                </div>

                <div className="sg-grid">
                    {sectors.map((s) => (
                        <div className="sg-card" key={s.title} tabIndex={0}>
                            <img src={s.image} alt={s.title} className="sg-image" loading="lazy" />
                            <div className="sg-overlay" />
                            <div className="sg-content">
                                <span className="sg-bar" />
                                <h3 className="sg-title">{s.title}</h3>
                                <div className="sg-description" dangerouslySetInnerHTML={{ __html: s.descriptionHtml }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .sg-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        @media (max-width: 1100px) { .sg-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 760px) { .sg-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .sg-grid { grid-template-columns: 1fr; } }

        .sg-card {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          aspect-ratio: 1 / 1;
          cursor: pointer;
          outline: none;
        }
        @media (max-width: 480px) { .sg-card { aspect-ratio: 4 / 3; } }

        .sg-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .sg-card:hover .sg-image,
        .sg-card:focus-visible .sg-image { transform: scale(1.06); }

        .sg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.55) 38%, rgba(10,22,40,0.05) 68%, transparent 100%);
          transition: background 0.35s ease;
        }
        .sg-card:hover .sg-overlay,
        .sg-card:focus-visible .sg-overlay {
          background: linear-gradient(to top, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.82) 55%, rgba(10,22,40,0.35) 85%, rgba(10,22,40,0.1) 100%);
        }

        .sg-content {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          padding: 22px;
        }

        .sg-bar {
          display: block;
          width: 28px;
          height: 3px;
          border-radius: 2px;
          background: var(--orange);
          margin-bottom: 12px;
          transition: width 0.3s ease;
        }
        .sg-card:hover .sg-bar,
        .sg-card:focus-visible .sg-bar { width: 44px; }

        .sg-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.01em;
          line-height: 1.3;
          margin: 0;
        }

        .sg-description {
          font-size: 0.85rem;
          line-height: 1.55;
          color: rgba(255,255,255,0.8);
          margin-top: 10px;
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, opacity 0.3s ease 0.05s;
        }
        .sg-description p { margin: 0; }
        .sg-card:hover .sg-description,
        .sg-card:focus-visible .sg-description {
          max-height: 100px;
          opacity: 1;
        }
      `}</style>
        </section>
    )
}