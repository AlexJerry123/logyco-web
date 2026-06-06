'use client'

const partners = [
  'Zebra Technologies','Honeywell','Datalogic','SOTI',
  'Impinj','Printronix','Cognex','Intermec',
  'Zebra Technologies','Honeywell','Datalogic','SOTI',
  'Impinj','Printronix','Cognex','Intermec',
]

export default function Partners() {
  return (
    <section style={{ background: 'var(--navy)', padding: '48px 0', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <span style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Partners tecnológicos de referencia
        </span>
      </div>
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(90deg, var(--navy), transparent)', zIndex: 2 }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(270deg, var(--navy), transparent)', zIndex: 2 }} />
        <div style={{ display: 'flex', animation: 'marquee 30s linear infinite', width: 'max-content', alignItems: 'center' }}>
          {partners.map((p, i) => (
            <div key={i} style={{ padding: '0 36px', whiteSpace: 'nowrap' }}>
              <div style={{
                padding: '10px 20px',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '8px',
                fontSize: '13px', fontWeight: 600,
                color: 'rgba(255,255,255,0.55)',
                letterSpacing: '-0.01em',
              }}>{p}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
