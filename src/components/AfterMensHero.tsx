export default function AfterMensHero() {
  return (
    <section id="after-mens-hero" className="relative h-screen overflow-hidden bg-slate-950">
      <img
        src="/orange-lehenga-pair.avif"
        alt="Labelyani after mens hero"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/18"></div>
      <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent"></div>

      <div className="relative z-10 flex h-full items-end px-6 pb-12 sm:px-10 lg:px-16">
        <div className="max-w-xl space-y-5 text-left">
          <p className="text-white text-2xl tracking-[0.35em] uppercase">BESPOKE</p>
          <button className="border border-white/70 bg-black/20 px-8 py-3 text-sm tracking-[0.25em] text-white backdrop-blur-sm transition hover:bg-white/10">
            EXPLORE MORE
          </button>
        </div>
      </div>
    </section>
  )
}
