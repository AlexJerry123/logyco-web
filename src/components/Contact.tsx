'use client'
import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-md)',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-dm)',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
  }

  return (
    <section id="contacto" style={{
      padding: '120px 40px',
      background: 'var(--deep)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: '800px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(0,102,255,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          {/* Left */}
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '4px 14px',
              background: 'var(--accent-dim)',
              border: '1px solid rgba(0,212,255,0.15)',
              borderRadius: '100px',
              marginBottom: '24px',
            }}>
              <span style={{ fontFamily: 'var(--font-syne)', fontSize: '11px', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Hablemos
              </span>
            </div>

            <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
              ¿Listo para{' '}
              <span style={{ color: 'var(--accent)' }}>transformar</span>{' '}
              tu operativa?
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8, fontWeight: 300, marginBottom: '48px' }}>
              Cuéntanos tu reto. Nuestro equipo de especialistas analizará tu caso y te propondrá la solución más adecuada sin compromiso.
            </p>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { icon: '📍', label: 'Oficinas', value: 'Barcelona, España' },
                { icon: '📞', label: 'Teléfono', value: '+34 93 XXX XX XX' },
                { icon: '✉️', label: 'Email', value: 'info@logyco.es' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{
                    width: '44px', height: '44px',
                    background: 'var(--card)',
                    border: '1px solid var(--border)',
                    borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '18px', flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-syne)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '14px', color: 'var(--text-primary)', marginTop: '2px' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div style={{
            padding: '48px',
            background: 'var(--card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-lg)',
          }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: '48px', marginBottom: '24px' }}>✅</div>
                <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>
                  Mensaje enviado
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>
                  Nuestro equipo se pondrá en contacto contigo en menos de 24 horas hábiles.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ fontFamily: 'var(--font-syne)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                      Nombre
                    </label>
                    <input
                      required
                      style={inputStyle}
                      placeholder="Tu nombre"
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                      onFocus={e => e.target.style.borderColor = 'rgba(0,212,255,0.4)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: 'var(--font-syne)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                      Email
                    </label>
                    <input
                      required type="email"
                      style={inputStyle}
                      placeholder="tu@empresa.com"
                      value={form.email}
                      onChange={e => setForm({...form, email: e.target.value})}
                      onFocus={e => e.target.style.borderColor = 'rgba(0,212,255,0.4)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontFamily: 'var(--font-syne)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    Empresa
                  </label>
                  <input
                    style={inputStyle}
                    placeholder="Nombre de tu empresa"
                    value={form.company}
                    onChange={e => setForm({...form, company: e.target.value})}
                    onFocus={e => e.target.style.borderColor = 'rgba(0,212,255,0.4)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                <div>
                  <label style={{ fontFamily: 'var(--font-syne)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    Mensaje
                  </label>
                  <textarea
                    required
                    rows={4}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    placeholder="Cuéntanos tu reto o proyecto..."
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    onFocus={e => e.target.style.borderColor = 'rgba(0,212,255,0.4)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    padding: '16px',
                    background: 'var(--gradient-accent)',
                    border: 'none',
                    borderRadius: '100px',
                    fontFamily: 'var(--font-syne)', fontSize: '14px', fontWeight: 700,
                    color: '#000',
                    cursor: 'pointer',
                    marginTop: '8px',
                    transition: 'opacity 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none' }}
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
