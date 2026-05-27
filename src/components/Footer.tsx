export default function Footer() {
  return (
    <footer className="bg-black border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-light tracking-widest">LABELYANI</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Luxury ethnic couture celebrating tradition and innovation. Crafted with passion by master artisans.
            </p>
            <div className="flex gap-3 pt-4">
              <a href="#" className="text-slate-400 hover:text-amber-600 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-600 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 11-13.18 2.892l4.242 4.242a5 5 0 1-6.065 6.065L6.9 19.01A9.959 9.959 0 0123 3z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-600 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110 2.881 1.44 1.44 0 010-2.881z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-600 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-light text-sm tracking-widest text-slate-300">QUICK LINKS</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#home" className="hover:text-amber-600 transition">Home</a></li>
              <li><a href="#collections" className="hover:text-amber-600 transition">Collections</a></li>
              <li><a href="#bridalwear" className="hover:text-amber-600 transition">Bridal Wear</a></li>
              <li><a href="#menswear" className="hover:text-amber-600 transition">Menswear</a></li>
              <li><a href="#about" className="hover:text-amber-600 transition">About Us</a></li>
              <li><a href="#contact" className="hover:text-amber-600 transition">Contact</a></li>
            </ul>
          </div>

          {/* Collections */}
          <div className="space-y-4">
            <h4 className="font-light text-sm tracking-widest text-slate-300">COLLECTIONS</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-amber-600 transition">Lehengas</a></li>
              <li><a href="#" className="hover:text-amber-600 transition">Kurta Sets</a></li>
              <li><a href="#" className="hover:text-amber-600 transition">Sarees</a></li>
              <li><a href="#" className="hover:text-amber-600 transition">Shararas</a></li>
              <li><a href="#" className="hover:text-amber-600 transition">Sherwanis</a></li>
              <li><a href="#" className="hover:text-amber-600 transition">New Arrivals</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-light text-sm tracking-widest text-slate-300">CONTACT INFO</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex gap-2">
                <span className="text-amber-600">📞</span>
                <span>+91 (980) 123-4567</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600">✉️</span>
                <span>hello@labelyani.com</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600">📍</span>
                <span>Delhi, India</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600">🕐</span>
                <span>Mon-Sat: 10 AM - 6 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left - Copyright */}
            <div className="text-center md:text-left">
              <p className="text-slate-500 text-sm">
                © 2024 Labelyani. All rights reserved.
              </p>
            </div>

            {/* Center - Payment Methods */}
            <div className="flex justify-center gap-4">
              <span className="text-slate-500 text-xs tracking-wider">SECURE PAYMENTS:</span>
              <div className="flex gap-2">
                <span className="text-slate-600 text-xs">💳</span>
                <span className="text-slate-600 text-xs">🔒</span>
              </div>
            </div>

            {/* Right - Legal Links */}
            <div className="text-center md:text-right space-x-6">
              <a href="#" className="text-slate-500 hover:text-amber-600 transition text-sm">Privacy Policy</a>
              <a href="#" className="text-slate-500 hover:text-amber-600 transition text-sm">Terms</a>
              <a href="#" className="text-slate-500 hover:text-amber-600 transition text-sm">Returns</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
