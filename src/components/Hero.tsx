'use client'
const brands = ['Zebra', 'Honeywell', 'Sunmi', 'Datalogic', 'TSC', 'Newland', 'Bixolon']
function BrandMarquee() {
    const loopBrands = [...brands, ...brands]
    return (
        <div
            style={{
                position: 'relative',
                overflow: 'hidden',
                padding: '24px 0 44px',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
        >
            <div className="marquee-track" style={{ display: 'flex', width: 'max-content', gap: '64px' }}>
                {loopBrands.map((b, i) => (
                    <span
                        key={i}
                        style={{
                            fontSize: 'clamp(28px, 3.8vw, 44px)',
                            fontWeight: 800,
                            letterSpacing: '-0.02em',
                            textTransform: 'uppercase',
                            color: '#ffffff',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {b}
                    </span>
                ))}
            </div>
            <style>{`
        .marquee-track { animation: marquee-scroll 30s linear infinite; }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
      `}</style>
        </div>
    )
}
export default function Hero() {
    const cardStyle = {
        background: '#0a1628',
        borderRadius: '28px',
        border: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
    }
    return (
        <>
            <section style={{ background: '#FBD7C9' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '112px 20px 0' }}>
                    {/* DESKTOP: Tarjeta única con contenido centrado verticalmente */}
                    <div style={{ ...cardStyle, position: 'relative', minHeight: '520px' }} className="hero-desktop-card">
                        {/* Imagen de fondo ocupando toda la tarjeta */}
                        <img
                            src="/Zebras.png"
                            alt="Zebras"
                            style={{
                                position: 'absolute',
                                inset: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center',
                                display: 'block',
                                zIndex: 1
                            }}
                        />
                        <div style={{
                            position: 'relative',
                            zIndex: 2,
                            maxWidth: '560px',
                            padding: '56px 48px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            width: '100%'
                        }}>
                            <div className="fu d1" style={{ fontSize: '11px', fontWeight: 600, color: '#e8401c', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#e8401c', display: 'inline-block', flexShrink: 0 }}></span>
                                Identificación · Movilidad · Trazabilidad
                            </div>
                            <h1 className="fu d2" style={{ fontSize: 'clamp(24px, 3.2vw, 42px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, color: '#ffffff', marginBottom: '16px' }}>
                                Integramos hardware. Diseñamos software.{' '}
                                <span style={{ color: '#e8401c' }}>Resolvemos logística.</span>
                            </h1>
                            <p className="fu d3" style={{ fontSize: 'clamp(13px, 1.3vw, 15px)', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, maxWidth: '440px', marginBottom: '28px' }}>
                                Soluciones de identificación automática, movilidad y trazabilidad para logística, industria y distribución.
                            </p>
                            <div className="fu d4" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                <a href="/contacto" style={{ padding: '12px 22px', background: '#e8401c', color: 'white', borderRadius: '8px', fontSize: '14px', fontWeight: 600, transition: 'opacity 0.2s', whiteSpace: 'nowrap' }}
                                    onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                                >Hablar con un experto →</a>
                                <a href="#soluciones" style={{ padding: '12px 22px', border: '1px solid rgba(255,255,255,0.3)', color: '#ffffff', borderRadius: '8px', fontSize: '14px', fontWeight: 500, transition: 'border-color 0.2s, background 0.2s', whiteSpace: 'nowrap', background: 'rgba(0,0,0,0.2)' }}
                                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)'; e.currentTarget.style.background = 'rgba(0,0,0,0.4)'; }}
                                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.background = 'rgba(0,0,0,0.2)'; }}
                                >Ver soluciones</a>
                            </div>
                        </div>
                    </div>
                    {/* MOBILE */}
                    <div style={{ ...cardStyle, position: 'relative' }} className="hero-mobile">
                        <img
                            src="/Zebras.png"
                            alt="Zebras"
                            style={{
                                position: 'absolute',
                                inset: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center 15%',
                                display: 'block',
                                zIndex: 1
                            }}
                        />
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(180deg, rgba(10,22,40,0.55) 0%, rgba(10,22,40,0.88) 55%, #0a1628 100%)',
                            zIndex: 1
                        }} />
                        <div style={{ position: 'relative', zIndex: 2, padding: '44px 24px' }}>
                            <div style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.16em', color: '#e8401c', textTransform: 'uppercase', marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span style={{ width: '16px', height: '2px', background: '#e8401c', borderRadius: '1px', flexShrink: 0 }}></span>
                                Identificación · Movilidad · Trazabilidad
                            </div>
                            <h1 style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#fff', margin: '0 0 32px' }}>
                                Integramos hardware.<br />
                                Diseñamos software.<br />
                                <span style={{ color: '#e8401c' }}>Resolvemos logística.</span>
                            </h1>
                            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, margin: '0 0 32px', borderLeft: '2px solid rgba(232,64,28,0.4)', paddingLeft: '14px' }}>
                                Soluciones de identificación automática, movilidad y trazabilidad para logística, industria y distribución.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '8px' }}>
                                <a href="/contacto" style={{ padding: '13px 20px', background: '#e8401c', color: 'white', borderRadius: '8px', fontSize: '14px', fontWeight: 600, textAlign: 'center' }}>Hablar con un experto →</a>
                                <a href="#soluciones" style={{ padding: '13px 20px', border: '1px solid rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.9)', borderRadius: '8px', fontSize: '14px', fontWeight: 500, textAlign: 'center', background: 'rgba(0,0,0,0.2)' }}>Ver soluciones</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Tira de marcas */}
                <BrandMarquee />
            </section>
            <style>{`
        .hero-desktop-card { display: flex; align-items: center; }
        .hero-mobile { display: none; margin-top: 20px; }
        @media(max-width: 768px) {
          .hero-desktop-card { display: none; }
          .hero-mobile { display: block; }
        }
      `}</style>
        </>
    )
}