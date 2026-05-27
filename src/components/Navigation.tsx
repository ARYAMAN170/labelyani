import { useState, useEffect } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-950/98 backdrop-blur-md border-b border-amber-600/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/labelyani-logo.png" 
              alt="LABELYANI" 
              className="h-12 w-auto"
            />
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop Menu - Below Logo */}
        <div className="hidden md:flex justify-center items-center space-x-12 pb-4">
          <a href="#home" className="hover:text-amber-400 transition text-sm tracking-wider text-white">Home</a>
          <a href="#collections" className="hover:text-amber-400 transition text-sm tracking-wider text-white">Womenswear</a>
          <a href="#menswear" className="hover:text-amber-400 transition text-sm tracking-wider text-white">Menswear</a>
          <a href="#collections" className="hover:text-amber-400 transition text-sm tracking-wider text-white">Collections</a>
          <a href="#contact" className="hover:text-amber-400 transition text-sm tracking-wider text-white">Contact Us</a>
          <a href="#about" className="hover:text-amber-400 transition text-sm tracking-wider text-white">About Us</a>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-slate-950/95">
            <a href="#home" className="block py-2 hover:text-amber-400 transition text-sm tracking-wider text-white">Home</a>
            <a href="#collections" className="block py-2 hover:text-amber-400 transition text-sm tracking-wider text-white">Womenswear</a>
            <a href="#menswear" className="block py-2 hover:text-amber-400 transition text-sm tracking-wider text-white">Menswear</a>
            <a href="#collections" className="block py-2 hover:text-amber-400 transition text-sm tracking-wider text-white">Collections</a>
            <a href="#contact" className="block py-2 hover:text-amber-400 transition text-sm tracking-wider text-white">Contact Us</a>
            <a href="#about" className="block py-2 hover:text-amber-400 transition text-sm tracking-wider text-white">About Us</a>
          </div>
        )}
      </div>
    </nav>
  )
}
