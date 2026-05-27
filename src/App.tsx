import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Collections from './components/Collections'
import BridalWear from './components/BridalWear'
import Menswear from './components/Menswear'
import AfterMensHero from './components/AfterMensHero'
import CustomerReviews from './components/CustomerReviews'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <Hero />
      <Collections />
      <BridalWear />
      <Menswear />
      <AfterMensHero />
      <CustomerReviews />
      <About />
      <Contact />
      <Footer />

      <a
        href="https://wa.me/919801234567"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-60 flex h-14 w-14 items-center justify-center rounded-full shadow-lg shadow-black/40 transition hover:scale-105"
      >
        <img
          src="/whatapp logo.png"
          alt="WhatsApp"
          className="h-14 w-14 rounded-full object-cover"
        />
      </a>
    </div>
  )
}

export default App
