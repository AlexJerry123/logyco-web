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
      <section id="partners" style={{ width: "100%", backgroundColor: "#0a1628", padding: "48px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.18em",
            color: "#e8401c",
            textTransform: "uppercase" as const,
            marginBottom: "24px",
          }}>
            Partners tecnológicos de referencia
          </p>
          <div className="partners-grid">
            {partners.map((partner) => (
              <div
                key={partner.name}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px 16px",
                  height: "80px",
                }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  style={{
                    width: "100%",
                    maxWidth: "120px",
                    maxHeight: "40px",
                    objectFit: "contain",
                  }}
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
          gap: 12px;
        }
        @media (max-width: 768px) {
          .partners-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>
    </>
  );
}
