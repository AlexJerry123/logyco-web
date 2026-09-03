import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Contacto | LOGYCO',
  description: 'Habla con nuestro equipo sobre tu proyecto de identificación automática, movilidad y trazabilidad.',
}

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '110px', background: 'var(--white)' }}>
        <Contact />
      </div>
      <Footer />
    </>
  )
}
