'use client'
import { useState } from 'react'

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
      <section id="contacto" style={{ background: 'var(--navy)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 20px' }}>
          <div className="contact-grid">
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '16px', height: '2px', background: 'var(--orange)', borderRadius: '1px' }} />Hablemos
              </div>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.08, color: 'white', marginBottom: '16px' }}>¿Listo para transformar tu operativa?</h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '40px' }}>Cuéntanos tu reto. Sin compromiso.</p>
              {[
                { l: 'Ubicación', v: "Carrer d'Esteve Albert, 59, local, 08304 Mataró, Barcelona" },
                { l: 'Teléfono', v: '937 57 33 79' },
                { l: 'Email', v: 'info@logyco.com' }
              ].map(item => (
                <div key={item.l} style={{ display: 'flex', gap: '16px', fontSize: '14px', marginBottom: '14px' }}>
                  <span style={{ color: 'rgba(255,255,255,0.35)', minWidth: '80px' }}>{item.l}</span>
                  <span style={{ color: 'white', fontWeight: 500 }}>{item.v}</span>
                </div>
              ))}
            </div>
            <div style={{ background: 'white', borderRadius: '16px', padding: '32px' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: '36px', marginBottom: '16px' }}>✓</div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '10px' }}>Mensaje enviado</h3>
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
      `}</style>
    </>
  )
}
