const reviewCards = [
  {
    image: '/kurti%201.webp',
    name: 'Aarohi',
    handle: '@labelyani',
    review: 'The fabric quality and finishing felt premium from the first try-on. Easily one of my favorite festive purchases.'
  },
  {
    image: '/kurti%202.webp',
    name: 'Meera',
    handle: '@labelyani',
    review: 'The silhouette was elegant and the embroidery looked even better in person. The styling felt very refined.'
  },
  {
    image: '/kurti%203.webp',
    name: 'Diya',
    handle: '@labelyani',
    review: 'I loved how comfortable it was while still looking occasion-ready. It moved beautifully throughout the evening.'
  },
  {
    image: '/kurti%204.webp',
    name: 'Nandini',
    handle: '@labelyani',
    review: 'The attention to detail is what stood out most. The look felt luxurious without being overdone.'
  },
  {
    image: '/kurti%205.webp',
    name: 'Ishita',
    handle: '@labelyani',
    review: 'A polished and graceful outfit. The color, cut, and overall finish made it feel truly special.'
  },
  {
    image: '/kurti%206.webp',
    name: 'Sanya',
    handle: '@labelyani',
    review: 'This felt like a premium designer piece. The drape and comfort made it easy to wear for hours.'
  },
  {
    image: '/kurti%207.webp',
    name: 'Ananya',
    handle: '@labelyani',
    review: 'A beautiful blend of tradition and contemporary styling. The entire look felt graceful and elevated.'
  }
]

export default function CustomerReviews() {
  const marqueeItems = [...reviewCards, ...reviewCards]

  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center space-y-3">
          <p className="text-amber-400 text-xs tracking-[0.35em] uppercase">@labelyani</p>
          <h2 className="text-white review-script-text text-4xl md:text-5xl font-light tracking-tight">
            Customer Reviews
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400 text-sm md:text-base">
            Real words from customers who wore the collection and made it their own.
          </p>
        </div>
      </div>

      <div className="reviews-marquee overflow-hidden">
        <div className="reviews-track flex w-max gap-6 px-6">
          {marqueeItems.map((card, index) => (
            <article
              key={`${card.name}-${index}`}
              className="group relative flex h-112 w-76 shrink-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#120f10] shadow-2xl"
            >
              <img
                src={card.image}
                alt={card.name}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent"></div>
              <div className="relative z-10 flex h-full w-full flex-col justify-end p-5 text-white">
                <div className="mb-3 flex items-center justify-between text-xs tracking-[0.3em] uppercase text-white/75">
                  <span>{card.handle}</span>
                  <span>{card.name}</span>
                </div>
                <p className=" text-sm leading-8 text-white/90 md:text-xl md:leading-10">
                  “{card.review}”
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
