export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-amber-600 text-sm tracking-widest font-light">ABOUT LABELYANI</p>
              <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight">
                Tradition Meets Innovation
              </h2>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed">
              Founded with a passion for preserving traditional Indian craftsmanship while embracing modern design sensibilities, Labelyani stands as a beacon of luxury ethnic wear. We believe that every piece of clothing tells a story of heritage, culture, and artistry.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="text-amber-600 font-light tracking-wider mb-2">OUR MISSION</h4>
                <p className="text-slate-400 leading-relaxed">
                  To celebrate the beauty of Indian textile traditions and empower artisans by creating timeless pieces that blend heritage with contemporary style.
                </p>
              </div>
              <div>
                <h4 className="text-amber-600 font-light tracking-wider mb-2">OUR VISION</h4>
                <p className="text-slate-400 leading-relaxed">
                  To be the global symbol of authentic, sustainable, and exquisitely crafted Indian couture that represents the essence of elegance and cultural pride.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white tracking-wider transition border border-amber-600">
                READ OUR STORY
              </button>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-lg border border-slate-700 text-center space-y-3">
                <p className="text-4xl font-light text-amber-600">2018</p>
                <p className="text-sm text-slate-400 tracking-wider">ESTABLISHED</p>
                <p className="text-xs text-slate-500">From humble beginnings to global recognition</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-lg border border-slate-700 text-center space-y-3">
                <p className="text-4xl font-light text-amber-600">50+</p>
                <p className="text-sm text-slate-400 tracking-wider">ARTISANS</p>
                <p className="text-xs text-slate-500">Skilled craftspeople dedicated to perfection</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-lg border border-slate-700 text-center space-y-3">
                <p className="text-4xl font-light text-amber-600">10K+</p>
                <p className="text-sm text-slate-400 tracking-wider">CUSTOMERS</p>
                <p className="text-xs text-slate-500">Worldwide satisfied clientele</p>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-lg border border-slate-700 text-center space-y-3">
                <p className="text-4xl font-light text-amber-600">15</p>
                <p className="text-sm text-slate-400 tracking-wider">COLLECTIONS</p>
                <p className="text-xs text-slate-500">Diverse and stunning ranges</p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="space-y-3 pt-4">
              <p className="text-sm text-slate-400 tracking-wider">CERTIFICATIONS & RECOGNITION</p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-amber-600">●</span>
                  <span className="text-sm text-slate-300">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-amber-600">●</span>
                  <span className="text-sm text-slate-300">Ethical Manufacturing Practices</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-amber-600">●</span>
                  <span className="text-sm text-slate-300">Sustainable Fashion Initiative</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
