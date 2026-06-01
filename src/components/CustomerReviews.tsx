import DomeGallery from './DomeGallery'

export default function CustomerReviews() {
  const kurtiImages = [
    { src: '/kurti 1.webp', alt: 'Kurti 1 - Customer Review' },
    { src: '/kurti 2.webp', alt: 'Kurti 2 - Customer Review' },
    { src: '/kurti 3.webp', alt: 'Kurti 3 - Customer Review' },
    { src: '/kurti 4.webp', alt: 'Kurti 4 - Customer Review' },
    { src: '/kurti 5.webp', alt: 'Kurti 5 - Customer Review' },
    { src: '/kurti 6.webp', alt: 'Kurti 6 - Customer Review' },
    { src: '/kurti 7.webp', alt: 'Kurti 7 - Customer Review' }
  ]

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

      <div style={{ height: '650px', width: '100%', marginTop: '20px' }}>
        <DomeGallery
          images={kurtiImages}
          fit={0.6}
          minRadius={400}
          maxVerticalRotationDeg={0}
          segments={28}
          dragDampening={2}
          grayscale={false}
          imageBorderRadius="20px"
          openedImageBorderRadius="20px"
          openedImageWidth="350px"
          openedImageHeight="350px"
        />
      </div>
    </section>
  )
}
