'use client'
import Image from 'next/image'

const cols = [
    {
        title: 'Soluciones',
        links: [
            { label: 'Movilidad Industrial', href: '#soluciones' },
            { label: 'RFID', href: '#soluciones' },
            { label: 'Trazabilidad', href: '#soluciones' },
            { label: 'Impresion', href: '#soluciones' },
            { label: 'Automatizacion', href: '#soluciones' },
        ]
    },
    {
        title: 'Sectores',
        links: [
            { label: 'Industria', href: '#sectores' },
            { label: 'Logistica', href: '#sectores' },
            { label: 'Retail', href: '#sectores' },
            { label: 'Healthcare', href: '#sectores' },
            { label: 'Alimentacion', href: '#sectores' },
        ]
    },
    {
        title: 'Empresa',
        links: [
            { label: 'Quienes somos', href: '/contacto' },
            { label: 'Partners', href: '#partners' },
            { label: 'Casos de exito', href: '#casos' },
            { label: 'Contacto', href: '/contacto' },
        ]
    },
]

export default function Footer() {
    return (
        <>
            <footer style={{ background: '#111830', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '48px 20px 32px' }}>
                    <div className="footer-grid" style={{ marginBottom: '40px' }}>
                        <div>
                            <div style={{ marginBottom: '14px' }}>
                                <a
                                    href="/"
                                    className="logo-mark"
                                    onClick={(e) => {
                                        if (window.location.pathname === '/') {
                                            e.preventDefault()
                                            window.scrollTo({ top: 0, behavior: 'smooth' })
                                        }
                                    }}
                                    style={{ display: 'inline-block', textDecoration: 'none' }}
                                >
                                    {/* Contenedor con fondo contrastante para el logo */}
                                    <div style={{
                                        background: '#ffffff',
                                        padding: '8px 12px',
                                        borderRadius: '6px',
                                        display: 'inline-block',
                                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                    }}>
                                        <img
                                            src="/logo-full.png"
                                            alt="LOGYCO"
                                            style={{ height: '45px', width: 'auto', display: 'block' }}
                                        />
                                    </div>
                                </a>
                            </div>
                            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, maxWidth: '240px' }}>
                                Especialistas en identificacion automatica, movilidad empresarial y trazabilidad industrial.
                            </p>
                        </div>
                        {cols.map(col => (
                            <div key={col.title}>
                                <div style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px' }}>{col.title}</div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {col.links.map(link => (
                                        <a key={link.label} href={link.href} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', transition: 'color 0.15s' }}
                                            onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                                            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
                                        >{link.label}</a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>© {new Date().getFullYear()} Logistica & Codificacion. Todos los derechos reservados.</span>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            {['Privacidad', 'Cookies', 'Aviso legal'].map(link => (
                                <a key={link} href="#" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)', transition: 'color 0.15s' }}
                                    onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'}
                                >{link}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
            <style>{`
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; }
        @media(max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr; gap: 28px; } }
        @media(max-width: 480px) { .footer-grid { grid-template-columns: 1fr; } }
      `}</style>
        </>
    )
}