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
      image: '/EAC86F8E-06A3-44D2-B06B-7B06BD80284C copy.JPG'
    }
  ]

  return (
    <section id="menswear" className="bg-purple-200 py-16 px-4 md:px-8 max-w-[1600px] mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {menswearItems.map((item) => (
            <div 
              key={item.id}
              className="group cursor-pointer flex flex-col items-center"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[3/4] overflow-hidden mb-5">
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Text Container */}
              <div className="text-center">
                <h3 className="text-[#333333] text-xs md:text-sm tracking-[0.15em] font-light uppercase border-b border-gray-400 pb-1.5 inline-block transition-colors duration-300 group-hover:border-gray-800">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}