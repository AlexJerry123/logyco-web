'use client'
import { useState } from 'react'

const items = [
  { icon: '🤝', title: 'Asociaciones Acreditadas', desc: 'Certificados por las principales marcas tecnológicas para ofrecer soluciones de confianza y garantía.' },
  { icon: '🌍', title: 'Soporte Global', desc: 'Servicio y cobertura integrales dondequiera que opere tu empresa, con respuesta rápida garantizada.' },
  { icon: '📈', title: 'Aprovisionamiento Escalable', desc: 'Suministro y despliegue ágil, desde sedes individuales hasta escala empresarial sin fricciones.' },
  { icon: '🎯', title: 'Experiencia Contrastada', desc: 'Décadas entregando resultados tecnológicos fiables en los entornos industriales más exigentes.' },
]

export default function Differentiators() {
  const [hov, setHov] = useState<number | null>(null)
  return (
    <>
      <section style={{ background: 'var(--navy)', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Header centrado */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <div style={{ width: '14px', height: '1.5px', background: 'var(--orange)', borderRadius: '1px' }} />
              Por qué elegirnos
              <div style={{ width: '14px', height: '1.5px', background: 'var(--orange)', borderRadius: '1px' }} />
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, letterSpacing: '-0.04em', color: 'white', marginBottom: '12px' }}>Lo que nos diferencia</h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', maxWidth: '460px', margin: '0 auto', lineHeight: 1.7 }}>
              Asociaciones certificadas, experiencia contrastada y entrega ágil, todo orientado a mantener tu operativa en marcha.
            </p>
          </div>

          {/* Grid 4 columnas */}
          <div className="diff-grid" style={{ gap: '1px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', overflow: 'hidden' }}>
            {items.map((item, i) => (
              <div key={i}
                onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}
                style={{
                  padding: '40px 28px', background: hov === i ? 'rgba(255,255,255,0.04)' : 'var(--navy)',
                  textAlign: 'center', transition: 'background 0.2s', position: 'relative',
                }}>
                {hov === i && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'var(--orange)' }} />}
                <div style={{
                  width: '56px', height: '56px',
                  border: `1px solid ${hov === i ? 'rgba(255,77,58,0.4)' : 'rgba(255,255,255,0.12)'}`,
                  borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px', fontSize: '24px',
                  background: hov === i ? 'rgba(255,77,58,0.1)' : 'transparent',
                  transition: 'all 0.2s',
                }}>{item.icon}</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'white', marginBottom: '10px', lineHeight: 1.3 }}>{item.title}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .diff-grid { display: grid; grid-template-columns: repeat(4,1fr); }
        @media(max-width:1024px){ .diff-grid { grid-template-columns: repeat(2,1fr); } }
        @media(max-width:480px){ .diff-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  )
}
