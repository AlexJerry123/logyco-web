'use client'

const partners = [
  { name: 'Zebra Technologies', abbr: 'ZBR' },
  { name: 'Honeywell', abbr: 'HON' },
  { name: 'Datalogic', abbr: 'DAL' },
  { name: 'SOTI', abbr: 'SOT' },
  { name: 'Impinj', abbr: 'IMP' },
  { name: 'Printronix', abbr: 'PRX' },
  { name: 'Cognex', abbr: 'CGX' },
  { name: 'Zebra Technologies', abbr: 'ZBR' },
  { name: 'Honeywell', abbr: 'HON' },
  { name: 'Datalogic', abbr: 'DAL' },
  { name: 'SOTI', abbr: 'SOT' },
  { name: 'Impinj', abbr: 'IMP' },
  { name: 'Printronix', abbr: 'PRX' },
  { name: 'Cognex', abbr: 'CGX' },
]

export default function Partners() {
  return (
    <section style={{
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
      padding: '48px 0',
      background: 'var(--bg)',
      overflow: 'hidden',
    }}>
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          Partners tecnológicos de referencia
        </span>
      </div>

      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(90deg, var(--bg), transparent)', zIndex: 2 }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(270deg, var(--bg), transparent)', zIndex: 2 }} />

        <div style={{ display: 'flex', animation: 'marquee 28s linear infinite', width: 'max-content', alignItems: 'center' }}>
          {partners.map((p, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center',
              padding: '0 48px',
              whiteSpace: 'nowrap',
            }}>
              {/* Logo pill */}
              <div style={{
                padding: '10px 20px',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                background: 'var(--white)',
                fontFamily: 'var(--font-inter)',
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                letterSpacing: '-0.01em',
              }}>
                {p.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
