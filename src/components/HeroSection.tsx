import { useEffect, useState } from 'react'

const bannerImages = [
  {
    id: 1,
    image:
      '',
    title: '.',
  },
  {
    id: 2,
    image:
      '',
    title: '..',
  },
  {
    id: 3,
    image:
      '',
    title: '...',
  },
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + bannerImages.length) % bannerImages.length)
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % bannerImages.length)
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg mt-2">
      {/* Ảnh và overlay */}
      <div className="relative h-[320px] md:h-[390px] transition-all duration-700">
        {bannerImages.map((item, idx) => (
          <img
            key={item.id}
            src={item.image}
            alt={item.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
            draggable={false}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-20"></div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
            {bannerImages[current].title}
          </h2>
        </div>
      </div>
      {/* Nút chuyển */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center z-40 transition"
        aria-label="Previous"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center z-40 transition"
        aria-label="Next"
      >
        &#8594;
      </button>
      {/* Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-40">
        {bannerImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full border-2 ${
              idx === current
              ? 'bg-white/60 border-white/80'
              : 'bg-white/20 border-white/40'
               
            } transition`}
            aria-label={`Chuyển đến ảnh ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
