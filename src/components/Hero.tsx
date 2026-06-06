'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Animated grid of dots
    const dots: { x: number; y: number; opacity: number; speed: number }[] = []
    const spacing = 48
    for (let x = 0; x < canvas.width; x += spacing) {
      for (let y = 0; y < canvas.height; y += spacing) {
        dots.push({ x, y, opacity: Math.random() * 0.3, speed: 0.003 + Math.random() * 0.005 })
      }
    }

    let frame = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      frame++
      dots.forEach((dot, i) => {
        dot.opacity = 0.04 + Math.abs(Math.sin(frame * dot.speed + i)) * 0.18
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, 1.2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 212, 255, ${dot.opacity})`
        ctx.fill()
      })
      requestAnimationFrame(animate)
    }
    animate()

    const onResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,102,255,0.15) 0%, transparent 60%), var(--black)',
    }}>
      {/* Animated dots canvas */}
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />

      {/* Glow orbs */}
      <div style={{
        position: 'absolute', top: '20%', left: '60%',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '40%', left: '10%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(0,102,255,0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '120px 40px 80px' }}>
        {/* Badge */}
        <div className="animate-fade-up delay-1" style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '6px 16px 6px 8px',
          background: 'var(--accent-dim)',
          border: '1px solid rgba(0,212,255,0.2)',
          borderRadius: '100px',
          marginBottom: '32px',
        }}>
          <div style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: 'var(--accent)',
            boxShadow: '0 0 8px var(--accent)',
          }} />
          <span style={{ fontFamily: 'var(--font-syne)', fontSize: '12px', fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Identificación · Movilidad · Trazabilidad
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up delay-2" style={{ fontSize: 'clamp(44px, 6vw, 80px)', fontWeight: 800, maxWidth: '820px', marginBottom: '28px' }}>
          Tecnología que conecta{' '}
          <span style={{
            background: 'var(--gradient-accent)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            operaciones,
          </span>
          {' '}personas y datos
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up delay-3" style={{
          fontSize: '18px', fontWeight: 300,
          color: 'var(--text-secondary)',
          maxWidth: '580px',
          lineHeight: 1.7,
          marginBottom: '48px',
        }}>
          Ayudamos a empresas de logística, industria y distribución a mejorar la trazabilidad, la movilidad y la eficiencia de sus procesos mediante soluciones tecnológicas avanzadas.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-4" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="#soluciones" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '16px 32px',
            background: 'var(--gradient-accent)',
            borderRadius: '100px',
            fontFamily: 'var(--font-syne)', fontWeight: 600, fontSize: '15px',
            color: '#000',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,212,255,0.3)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
          >
            Descubrir soluciones
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#casos" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '16px 32px',
            background: 'transparent',
            border: '1px solid var(--border-light)',
            borderRadius: '100px',
            fontFamily: 'var(--font-syne)', fontWeight: 500, fontSize: '15px',
            color: 'var(--text-primary)',
            transition: 'border-color 0.2s, background 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-dim)' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.background = 'transparent' }}
          >
            Ver casos de éxito
          </a>
        </div>

        {/* Stats row */}
        <div className="animate-fade-up delay-5" style={{
          display: 'flex', gap: '48px', flexWrap: 'wrap',
          marginTop: '80px',
          paddingTop: '48px',
          borderTop: '1px solid var(--border)',
        }}>
          {[
            { num: '+20', label: 'Años de experiencia' },
            { num: '+500', label: 'Proyectos implantados' },
            { num: '6', label: 'Sectores clave' },
            { num: '+30', label: 'Partners tecnológicos' },
          ].map(stat => (
            <div key={stat.label}>
              <div style={{ fontFamily: 'var(--font-syne)', fontSize: '36px', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>
                {stat.num}
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '6px', fontWeight: 400 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
