import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import PaymentMethods from './components/PaymentMethods'
import BrokerSupport from './components/BrokerSupport'
import HowItWorks from './components/HowItWorks'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <PaymentMethods />
        <BrokerSupport />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}