
const instagramPosts = [
  { id: 1, image: "/public/IMG_0036.avif", link: "https://instagram.com/labelyani", likes: "1.2k", comments: "48" },
  { id: 2, image: "/public/IMG_0212.avif", link: "https://instagram.com/labelyani", likes: "856", comments: "21" },
  { id: 3, image: "/public/IMG_0275.avif", link: "https://instagram.com/labelyani", likes: "2.4k", comments: "112" },
  { id: 4, image: "/public/IMG_0294.avif", link: "https://instagram.com/labelyani", likes: "943", comments: "35" },
];

export default function InstagramFeed() {
  return (
    <section className="py-20 bg-white flex flex-col items-center">
      
      {/* 1. Placeholder for your saved Instagram Typography Logo */}
      <div className="mb-10 flex justify-center px-4 w-full max-w-md">
        <img 
          src="public\insta.png" /* <-- UPDATE THIS TO YOUR SAVED LOGO PATH */
          alt="Labelyani Instagram" 
          className="w-full h-auto max-h-24 md:max-h-32 object-contain " 
        />
      </div>

      {/* 2. The Realistic Grid - 2px gap for that authentic IG profile look */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px] w-full max-w-6xl mb-12">
        {instagramPosts.map((post) => (
          <a 
            key={post.id} 
            href={post.link}
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative w-full aspect-square  overflow-hidden block bg-gray-50"
          >
            <img 
              src={post.image} 
              alt={`Instagram post ${post.id}`} 
              className="w-full h-full object-cover object-top"
            />
            
            {/* 3. Dark Overlay with IG Metrics on Hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
              
              {/* Likes Metric */}
              <div className="flex items-center gap-2 text-white font-semibold">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <span>{post.likes}</span>
              </div>

              {/* Comments Metric */}
              <div className="flex items-center gap-2 text-white font-semibold">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span>{post.comments}</span>
              </div>

            </div>
          </a>
        ))}
      </div>

      {/* 4. Refined Luxury Ghost Button */}
      <a 
        href="https://instagram.com/labelyani" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group flex items-center gap-3 px-8 py-4 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 uppercase tracking-[0.2em] text-xs"
      >
        {/* Minimalist IG Outline Icon */}
        <svg className="w-4 h-4 fill-current transition-colors" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
        Follow Us on Instagram
      </a>
    </section>
  );
}