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
    <section className="w-full bg-[#0a1628] py-16 px-6">
      <p className="text-center text-[11px] font-semibold tracking-[0.2em] text-[#3d5470] uppercase mb-10">
        Partners tecnológicos de referencia
      </p>
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="bg-white rounded-xl flex items-center justify-center px-5 py-6 h-20 hover:scale-105 transition-transform duration-200"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-w-[90px] max-h-[32px] w-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
