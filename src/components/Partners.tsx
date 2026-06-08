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
      <section id="partners" style={{ width: "100%", backgroundColor: "#0a1628", padding: "64px 24px" }}>
        <p style={{
          textAlign: "center",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.2em",
          color: "#4a6080",
          textTransform: "uppercase" as const,
          marginBottom: "40px",
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
                padding: "24px 20px",
                height: "90px",
              }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                style={{
                  width: "100%",
                  maxWidth: "140px",
                  maxHeight: "44px",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </section>
      <style>{`
        .partners-grid {
          max-width: 900px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 12px;
        }
        @media (max-width: 768px) {
          .partners-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
        }
      `}</style>
    </>
  );
}
