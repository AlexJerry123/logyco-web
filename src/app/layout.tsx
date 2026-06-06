import type { Metadata } from 'next'
import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'LOGYCO — Tecnología para operaciones inteligentes',
  description: 'Especialistas en identificación automática, movilidad empresarial y trazabilidad para entornos industriales y logísticos.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${syne.variable} ${dmSans.variable}`}>{children}</body>
    </html>
  )
}
