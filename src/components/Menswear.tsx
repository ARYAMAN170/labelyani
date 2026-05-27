export default function Menswear() {
  const menswearItems = [
    {
      id: 1,
      name: 'SHERWANIS',
      image: '/sherwani-men.avif'
    },
    {
      id: 2,
      name: 'JACKET SETS',
      image: '/jacket-men.avif'
    },
    {
      id: 3,
      name: 'BANDI KURTA SETS',
      image: '/yellow-kurta-men.avif'
    },
    {
      id: 4,
      name: 'KURTA SETS',
      image: '/yellow-kurta-men.avif'
    }
  ]

  return (
    <section id="menswear" className="bg-slate-950">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0">
          {menswearItems.map((item) => (
            <div 
              key={item.id}
              className="group relative h-[72vh] md:h-[70vh] xl:h-[80vh] overflow-hidden cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition"></div>
              <div className="absolute inset-0 bg-linear-to-t from-black/72 via-black/10 to-transparent"></div>

              <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                <h3 className="text-white text-sm md:text-[15px] tracking-[0.28em] font-light">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}
