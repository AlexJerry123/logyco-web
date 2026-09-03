'use client'
import { useState } from 'react'

const contactInfo = [
  {
    label: 'Teléfono',
    value: '937 57 33 79',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 4.5h4l1.8 4.5-2.2 1.8a12.5 12.5 0 0 0 5.1 5.1l1.8-2.2 4.5 1.8v4a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3 5.1 1.5 1.5 0 0 1 4.5 4.5Z" stroke="var(--orange)" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'info@logyco.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5.5" width="18" height="13" rx="2.2" stroke="var(--orange)" strokeWidth="1.8" />
        <path d="m4 7 8 6 8-6" stroke="var(--orange)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const inp: React.CSSProperties = { width: '100%', padding: '12px 14px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text-primary)', fontFamily: 'var(--font)', fontSize: '14px', outline: 'none', transition: 'border-color 0.15s' }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      await fetch('https://formspree.io/f/xwvjlwgq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form)
      })
      setSent(true)
    } catch {
      alert('Error al enviar. Por favor inténtalo de nuevo.')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <section id="contacto" style={{ background: 'var(--white)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 20px' }}>
          <div className="contact-grid">
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '16px', height: '2px', background: 'var(--orange)', borderRadius: '1px' }} />Hablemos
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4.6vw, 46px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08, color: 'var(--text-primary)', marginBottom: '16px' }}>¿Listo para transformar tu operativa?</h2>
              <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '40px' }}>Cuéntanos tu reto. Sin compromiso.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {contactInfo.map((item) => (
                  <div key={item.label} className="contact-info-row">
                    <div className="contact-info-icon">{item.icon}</div>
                    <div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '2px' }}>{item.label}</div>
                      <div style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '14.5px' }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="contact-card">
              {sent ? (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <div className="contact-success-badge">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12.5 10 17 19 7" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '10px', color: 'var(--text-primary)' }}>Mensaje enviado</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>Nos pondremos en contacto en menos de 24h.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div className="form-grid">
                    {[{ k: 'name', l: 'Nombre', p: 'Tu nombre' }, { k: 'email', l: 'Email', p: 'tu@empresa.com' }].map(f => (
                      <div key={f.k}>
                        <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>{f.l}</label>
                        <input required style={inp} placeholder={f.p} type={f.k === 'email' ? 'email' : 'text'}
                          value={(form as any)[f.k]} onChange={e => setForm({ ...form, [f.k]: e.target.value })}
                          onFocus={e => e.target.style.borderColor = 'var(--navy)'}
                          onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                      </div>
                    ))}
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>Empresa</label>
                    <input style={inp} placeholder="Nombre de tu empresa" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
                      onFocus={e => e.target.style.borderColor = 'var(--navy)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>Mensaje</label>
                    <textarea required rows={4} style={{ ...inp, resize: 'vertical' }} placeholder="Cuéntanos tu reto..."
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      onFocus={e => e.target.style.borderColor = 'var(--navy)'} onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                  </div>
                  <button type="submit" disabled={sending} style={{ padding: '14px', background: 'var(--navy)', border: 'none', borderRadius: '8px', fontFamily: 'var(--font)', fontSize: '14px', fontWeight: 600, color: 'white', cursor: sending ? 'not-allowed' : 'pointer', opacity: sending ? 0.7 : 1, transition: 'background 0.2s' }}
                    onMouseEnter={e => { if (!sending) e.currentTarget.style.background = 'var(--navy-light)' }}
                    onMouseLeave={e => e.currentTarget.style.background = 'var(--navy)'}
                  >{sending ? 'Enviando...' : 'Enviar mensaje →'}</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <style>{`
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        @media(max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; gap: 32px; }
          .form-grid { grid-template-columns: 1fr; }
        }

        .contact-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 32px;
          box-shadow: 0 16px 40px rgba(10,22,40,0.08);
        }

        .contact-info-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 0;
        }
        .contact-info-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(232,64,28,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-success-badge {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--orange, #e8401c);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          animation: contact-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        @keyframes contact-pop { from { transform: scale(0.4); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>
    </>
  )
}
