const partners = [
  { name: "Zebra Technologies", logo: "/logos/Zebra.jpg" },
  { name: "Epson", logo: "/logos/Epson.jpg" },
  { name: "Datalogic", logo: "/logos/Datalogic.jpg" },
  { name: "Honeywell", logo: "/logos/Honeywell.jpg" },
  { name: "Sunmi", logo: "/logos/Sunmi.jpg" },
  { name: "TSC", logo: "/logos/Tsc.jpg" },
];

export default function PartnersSection() {
  return (
    <section className="w-full bg-[#0b1623] py-20 px-6">
      <p className="text-center text-[11px] font-semibold tracking-[0.18em] text-[#6b7f95] uppercase mb-12">
        Partners tecnológicos de referencia
      </p>
      <div className="max-w-5xl mx-auto grid grid-cols-3 md:grid-cols-6 border border-white/[0.07] rounded-xl overflow-hidden">
        {partners.map((partner, index) => (
          <div
            key={partner.name}
            className={`
              bg-[#0f1e2e] flex items-center justify-center p-8
              hover:bg-[#162536] transition-colors duration-200
              ${index < partners.length - 1 ? "border-r border-white/[0.07]" : ""}
            `}
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-w-[110px] max-h-[36px] w-full object-contain rounded opacity-85 hover:opacity-100 hover:scale-105 transition-all duration-200"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
