'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [sent, setSent] = useState(false)

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 14px',
    background: 'var(--white)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-inter)', fontSize: '14px',
    outline: 'none', transition: 'border-color 0.15s',
  }

  return (
    <section id="contacto" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          {/* Left */}
          <div>
            <div className="section-label">Hablemos</div>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '24px' }}>
              ¿Listo para transformar tu operativa?
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '48px' }}>
              Cuéntanos tu reto. Nuestro equipo de especialistas analizará tu caso y te propondrá la solución más adecuada, sin compromiso.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { label: 'Ubicación', value: 'Barcelona, España' },
                { label: 'Teléfono', value: '+34 93 XXX XX XX' },
                { label: 'Email', value: 'info@logisticacodificacion.es' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: '12px', fontSize: '14px' }}>
                  <span style={{ color: 'var(--text-muted)', minWidth: '80px' }}>{item.label}</span>
                  <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div style={{ padding: '40px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '16px' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '40px', marginBottom: '20px' }}>✓</div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '10px' }}>Mensaje enviado</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>
                  Nos pondremos en contacto contigo en menos de 24 horas hábiles.
                </p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true) }} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  {[{ key: 'name', label: 'Nombre', placeholder: 'Tu nombre' }, { key: 'email', label: 'Email', placeholder: 'tu@empresa.com' }].map(f => (
                    <div key={f.key}>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '6px' }}>{f.label}</label>
                      <input required style={inputStyle} placeholder={f.placeholder}
                        value={(form as any)[f.key]}
                        onChange={e => setForm({...form, [f.key]: e.target.value})}
                        onFocus={e => e.target.style.borderColor = 'var(--text-primary)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '6px' }}>Empresa</label>
                  <input style={inputStyle} placeholder="Nombre de tu empresa"
                    value={form.company} onChange={e => setForm({...form, company: e.target.value})}
                    onFocus={e => e.target.style.borderColor = 'var(--text-primary)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '6px' }}>Mensaje</label>
                  <textarea required rows={4} style={{ ...inputStyle, resize: 'vertical' }} placeholder="Cuéntanos tu reto o proyecto..."
                    value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                    onFocus={e => e.target.style.borderColor = 'var(--text-primary)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
                <button type="submit" style={{
                  padding: '14px', background: 'var(--navy)', border: 'none', borderRadius: '8px',
                  fontFamily: 'var(--font-inter)', fontSize: '14px', fontWeight: 500,
                  color: '#fff', cursor: 'pointer', marginTop: '4px', transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--navy-light)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--navy)'}
                >
                  Enviar mensaje →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
