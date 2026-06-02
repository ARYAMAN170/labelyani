import DomeGallery from './DomeGallery'

export default function HappyCustomers() {
  const kurtiImages = [
    { src: '/cyan-frock.avif', alt: 'Cyan Frock' },
    { src: '/jacket-men.avif', alt: 'Jacket for Men' },
    { src: '/lehenga-orange.avif', alt: 'Orange Lehenga' },
    { src: '/orange-lehenga-pair.avif', alt: 'Orange Lehenga Pair' },
    { src: '/purple-lehenga.avif', alt: 'Purple Lehenga' },
    { src: '/sherwani-men.avif', alt: 'Sherwani for Men' },
    { src: '/yellow-kurta-men.avif', alt: 'Yellow Kurta for Men' },
    { src: '/yellow-lehenga.avif', alt: 'Yellow Lehenga' },
    { src: '/IMG_0009.avif', alt: 'Customer image 1' },
    { src: '/IMG_0036.avif', alt: 'Customer image 2' },
    { src: '/IMG_0212.avif', alt: 'Customer image 3' },
    { src: '/IMG_0220.avif', alt: 'Customer image 4' },
    { src: '/IMG_0275.avif', alt: 'Customer image 5' },
    { src: '/IMG_0279.avif', alt: 'Customer image 6' },
    { src: '/IMG_0289.avif', alt: 'Customer image 7' },
    { src: '/IMG_0294.avif', alt: 'Customer image 8' },
    { src: '/IMG_0296.avif', alt: 'Customer image 9' },
    { src: '/IMG_0307.avif', alt: 'Customer image 10' },
    { src: '/IMG_0316.avif', alt: 'Customer image 11' }
  ]

  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center space-y-3">
          <p className="text-amber-400 text-xs tracking-[0.35em] uppercase">@labelyani</p>
          <h2 className="text-white text-4xl md:text-5xl font-light tracking-tight">
            The Labelyani Muse
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400 text-sm md:text-base">
            Couture brought to life. A curated look at our clients celebrating their most cherished moments in Labelyani.
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
          openedImageWidth="300px"
          openedImageHeight="auto"
        />
      </div>
    </section>
  )
}
