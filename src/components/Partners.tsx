'use client'
export default function Partners() {
  const partners = [
    'Zebra Technologies', 'Honeywell', 'Datalogic', 'SOTI',
    'Impinj', 'Printronix', 'Intermec', 'Cognex',
    'Zebra Technologies', 'Honeywell', 'Datalogic', 'SOTI',
    'Impinj', 'Printronix', 'Intermec', 'Cognex',
  ]

  return (
    <section style={{ padding: '80px 0', overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      {/* Label */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <span style={{ fontFamily: 'var(--font-syne)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          Partners tecnológicos líderes
        </span>
      </div>

      {/* Marquee */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Fade edges */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(90deg, var(--black), transparent)', zIndex: 2 }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(270deg, var(--black), transparent)', zIndex: 2 }} />

        <div style={{ display: 'flex', animation: 'marquee 30s linear infinite', width: 'max-content' }}>
          {partners.map((p, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '0 40px',
              whiteSpace: 'nowrap',
            }}>
              <div style={{
                width: '8px', height: '8px',
                background: 'var(--accent)',
                borderRadius: '50%',
                opacity: 0.4,
              }} />
              <span style={{
                fontFamily: 'var(--font-syne)', fontSize: '16px', fontWeight: 600,
                color: 'var(--text-muted)',
                letterSpacing: '-0.01em',
              }}>
                {p}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
