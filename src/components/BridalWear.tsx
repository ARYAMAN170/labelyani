import { useEffect, useRef, useState } from 'react'

export default function BridalWear() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
    }
  }, [isMuted])

  return (
    <section id="bridalwear" className="relative h-screen overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/lehenga-orange.avif"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/bridal-real.MP4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 max-w-3xl">
          <p className="text-amber-400 text-sm tracking-[0.3em] font-light">SIGNATURE COLLECTION</p>
          <h2 className="text-white text-5xl md:text-7xl font-light tracking-tight">
            BRIDAL WEAR
          </h2>
          <p className="text-slate-100/90 text-lg md:text-xl font-light">
            A cinematic bridal showcase designed to feel immersive, luxurious, and uninterrupted.
          </p>
          <button className="px-8 py-3 border border-white/70 text-white tracking-wider transition hover:bg-white/10">
            EXPLORE MORE
          </button>
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
