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
    <section id="collections" className="bg-slate-950">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0">
          {collections.map((collection) => (
            <div 
              key={collection.id}
              className="group relative h-[72vh] md:h-[70vh] xl:h-[80vh] overflow-hidden cursor-pointer"
            >
              <img
                src={collection.image}
                alt={collection.name}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/18 group-hover:bg-black/28 transition"></div>
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent"></div>

              <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                <h3 className="text-white text-sm md:text-[15px] tracking-[0.28em] font-light">
                  {collection.name}
                </h3>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}
