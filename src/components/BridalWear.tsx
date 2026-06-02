import { useEffect, useRef, useState } from 'react'

export default function BridalWear() {
  const desktopVideoRef = useRef<HTMLVideoElement | null>(null)
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null)
  
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    if (desktopVideoRef.current) {
      desktopVideoRef.current.muted = isMuted
    }
    if (mobileVideoRef.current) {
      mobileVideoRef.current.muted = isMuted
    }
  }, [isMuted])

  return (
    <section id="bridalwear" className="relative h-screen overflow-hidden bg-black">
      
      {/* 1. MOBILE VERTICAL VIDEO - Added object-bottom so it never crops the bottom half */}
      <video
        ref={mobileVideoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/lehenga-orange-mobile.avif"
        className="absolute inset-0 h-full w-full object-cover object-bottom md:hidden"
      >
        <source src="/bridal-vertical.MP4" type="video/mp4" />
      </video>

      {/* 2. DESKTOP HORIZONTAL VIDEO */}
      <video
        ref={desktopVideoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/lehenga-orange.avif"
        className="absolute inset-0 h-full w-full object-cover hidden md:block"
      >
        <source src="/bridal-real.MP4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/20"></div>

      {/* 3. TEXT CONTAINER - Moved to top on mobile (pt-32, justify-start), centered on desktop */}
      <div className="relative z-10 h-full flex flex-col justify-start pt-32 md:justify-center md:pt-0 items-center px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Adjusted spacing for mobile (space-y-4) vs desktop (space-y-6) */}
        <div className="space-y-4 md:space-y-6 max-w-3xl">
          
          <p className="text-amber-400 text-xs md:text-sm tracking-[0.3em] font-light">
            SIGNATURE COLLECTION
          </p>
          
          {/* Scaled down heading for mobile (text-4xl) */}
          <h2 className="text-white text-4xl md:text-7xl font-light tracking-tight">
            BRIDAL WEAR
          </h2>
          
          {/* Scaled down paragraph for mobile (text-sm) */}
          <p className="text-slate-100/90 text-sm md:text-xl font-light px-2 md:px-0">
            A cinematic bridal showcase designed to feel immersive, luxurious, and uninterrupted.
          </p>
          
          {/* Scaled down button padding and text for mobile */}
          <div className="pt-2 md:pt-0">
            <button className="px-6 py-2.5 md:px-8 md:py-3 border border-white/70 text-white tracking-wider text-sm md:text-base transition hover:bg-white/10">
              EXPLORE MORE
            </button>
          </div>

        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center px-4">
        <button
          type="button"
          onClick={() => setIsMuted((current) => !current)}
          className="rounded-full border border-white/70 bg-black/30 px-5 py-2 text-xs tracking-[0.28em] text-white backdrop-blur-md transition hover:bg-black/50"
        >
          {isMuted ? 'UNMUTE' : 'MUTE'}
        </button>
      </div>
    </section>
  )
}