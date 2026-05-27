import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
    }
  }, [isMuted])

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/aftermen hero image.webp"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/herovideo.optimized.mp4" type="video/mp4" />
      </video>

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
