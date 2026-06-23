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

      <div className="absolute inset-0 "></div>
        <div className="absolute inset-0 "></div>
      <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent"></div>

      <div className="relative z-10 flex h-full items-end px-6 pb-12 sm:px-10 lg:px-16">
        <div className="max-w-xl space-y-5 text-left">
          <p className="text-white text-2xl tracking-[0.35em] uppercase">BRIDAL WEAR</p>
          <button className="border border-white/70 bg-black/20 px-8 py-3 text-sm tracking-[0.25em] text-white backdrop-blur-sm transition hover:bg-white/10">
             CONTACT US
          </button>
        </div>
      </div>
     

    </section>
  )
}