const partners = [
  { name: "Zebra Technologies", logo: "/Zebra.png" },
  { name: "Epson", logo: "/Epson.png" },
  { name: "Datalogic", logo: "/Datalogic.png" },
  { name: "Honeywell", logo: "/Honeywell.png" },
  { name: "Sunmi", logo: "/Sunmi.png" },
  { name: "TSC", logo: "/Tsc.png" },
];

export default function Partners() {
  return (
    <section style={{ width: "100%", backgroundColor: "#0a1628", padding: "64px 24px" }}>
      <p style={{
        textAlign: "center",
        fontSize: "11px",
        fontWeight: 600,
        letterSpacing: "0.2em",
        color: "#4a6080",
        textTransform: "uppercase",
        marginBottom: "40px",
      }}>
        Partners tecnológicos de referencia
      </p>
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gap: "12px",
      }}>
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
                maxWidth: "90px",
                maxHeight: "32px",
                width: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
