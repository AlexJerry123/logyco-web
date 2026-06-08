'use client'

const partners = [
  { name: "Zebra Technologies", logo: "/Zebra.jpg" },
  { name: "Epson", logo: "/Epson.jpg" },
  { name: "Datalogic", logo: "/Datalogic.jpg" },
  { name: "Honeywell", logo: "/Honeywell.jpg" },
  { name: "Sunmi", logo: "/Sunmi.jpg" },
  { name: "TSC", logo: "/Tsc.jpg" },
];

export default function Partners() {
  return (
    <>
      <section id="partners" style={{ padding: '80px 20px', background: 'var(--bg)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '36px' }}>
            <div className="section-tag">Partners tecnológicos</div>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08, color: 'var(--text-primary)' }}>
              Tecnología de los mejores fabricantes
            </h2>
          </div>
          <div className="partners-grid">
            {partners.map((partner) => (
              <div
                key={partner.name}
                style={{
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '24px 20px',
                  height: '90px',
                  background: 'var(--white)',
                  transition: 'border-color 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--navy)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{ width: '100%', maxWidth: '120px', maxHeight: '40px', objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        .partners-grid {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 16px;
        }
        @media (max-width: 1024px) { .partners-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
        @media (max-width: 640px) { .partners-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
      `}</style>
    </>
  );
}
