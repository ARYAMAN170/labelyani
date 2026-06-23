import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Collections from './components/Collections'
import BridalWear from './components/BridalWear'
import Menswear from './components/Menswear'
import AfterMensHero from './components/AfterMensHero'
import HappyCustomers from './components/HappyCustomers'
import Footer from './components/Footer'
import InstagramFeed from './components/InstagramFeed'
function App() {
  return (
    <div className="min-h-screen bg-purple-200 text-black">
      <Navigation />
      <Hero />
      <Collections />
      <BridalWear />
      <Menswear />
      <AfterMensHero />
      <HappyCustomers />
      <InstagramFeed />
      <Footer />

      <a
        href="https://wa.me/918959242002?text=Hello%20Label%20Yani!%20I%20have%20a%20query%20regarding%20your%20collection."
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
