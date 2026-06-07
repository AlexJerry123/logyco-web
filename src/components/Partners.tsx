'use client'
import Image from 'next/image'

const logos = [
  { src: '/logo-zebra.png', alt: 'Zebra Technologies' },
  { src: '/logo-honeywell.png', alt: 'Honeywell' },
  { src: '/logo-datalogic.png', alt: 'Datalogic' },
  { src: '/logo-soti.png', alt: 'SOTI' },
  { src: '/logo-impinj.png', alt: 'Impinj' },
  { src: '/logo-printronix.png', alt: 'Printronix' },
  { src: '/logo-sunmi.png', alt: 'Sunmi' },
  { src: '/logo-bartender.png', alt: 'BarTender' },
  // Duplicados para el marquee
  { src: '/logo-zebra.png', alt: 'Zebra Technologies' },
  { src: '/logo-honeywell.png', alt: 'Honeywell' },
  { src: '/logo-datalogic.png', alt: 'Datalogic' },
  { src: '/logo-soti.png', alt: 'SOTI' },
  { src: '/logo-impinj.png', alt: 'Impinj' },
  { src: '/logo-printronix.png', alt: 'Printronix' },
  { src: '/logo-sunmi.png', alt: 'Sunmi' },
  { src: '/logo-bartender.png', alt: 'BarTender' },
]

export default function Partners() {
  return (
    <section style={{ background: '#111827', padding: '64px 0', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <span style={{
          fontSize: '11px', fontWeight: 700,
          color: 'rgba(255,255,255,0.35)',
          letterSpacing: '0.1em', textTransform: 'uppercase',
        }}>
          Partners tecnológicos de referencia
        </span>
      </div>

      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Fade edges */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(90deg, #111827, transparent)', zIndex: 2 }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(270deg, #111827, transparent)', zIndex: 2 }} />

        <div style={{ display: 'flex', animation: 'marquee 32s linear infinite', width: 'max-content', alignItems: 'center', gap: '8px' }}>
          {logos.map((logo, i) => (
            <div key={i} style={{
              width: '160px',
              height: '72px',
              background: 'rgba(255,255,255,0.06)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              padding: '10px 16px',
            }}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={128}
                height={52}
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
