export default function Collections() {
  const collections = [
    {
      id: 1,
      name: 'LEHENGAS',
      image: '/lehenga-orange.avif'
    },
    {
      id: 2,
      name: 'KURTA SETS',
      image: '/cyan-frock.avif'
    },
    {
      id: 3,
      name: 'SAREES',
      image: '/yellow-lehenga.avif'
    },
    {
      id: 4,
      name: 'SHARARAS',
      image: '/purple-lehenga.avif'
    }
  ]

  return (
    // Changed to a white/light background with padding
    <section id="collections" className="bg-purple-200 py-16 px-4 md:px-8 max-w-[1600px] mx-auto">
      
      {/* Added gaps and adjusted grid columns */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {collections.map((collection) => (
            <div 
              key={collection.id}
              className="group cursor-pointer flex flex-col items-center"
            >
              {/* Image Container: Forced aspect ratio, overflow hidden for scale effect */}
              <div className="relative w-full aspect-[3/4] overflow-hidden mb-5">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text Container: Moved below the image with thin underline */}
              <div className="text-center">
                <h3 className="text-[#333333] text-xs md:text-sm tracking-[0.15em] font-light uppercase border-b border-gray-400 pb-1.5 inline-block transition-colors duration-300 group-hover:border-gray-800">
                  {collection.name}
                </h3>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}