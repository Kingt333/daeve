import { useState, useEffect } from 'react'
import './Home.css'

// Direct image URLs
const slides = [
  {
    id: 1,
    tagline: 'Fresh & Crispy. Premium taste',
    title: 'Welcome to Crispy',
    sub: 'Freshly made, perfectly crispy. Taste the difference delivered fast.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    tagline: 'Authentic Flavors',
    title: 'Savor Every Bite',
    sub: 'Handcrafted recipes prepared daily with fresh local ingredients.',
    image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    tagline: 'Deliciously Crafted',
    title: 'Pizza Perfection',
    sub: 'Experience the art of pizza making with our signature recipes.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    tagline: 'Freshly Made, Just for You',
    title: 'Small Sandwiches, Big Flavor',
    sub: 'Our small sandwiches are packed with flavor and made fresh daily.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=80',
  },
]

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Preload external images into memory
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image()
      img.src = slide.image
    })
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const activeSlide = slides[currentSlide]

  return (
    <section className="home-hero" aria-label="Home">

      {/* Slide layers */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
          role="img"
          aria-label={slide.title}
          aria-hidden={index !== currentSlide}
        >
          <span className="sr-only">{slide.title} - {slide.tagline}</span>
        </div>
      ))}

      <div className="hero-content" key={activeSlide.id}>
        <p className="red">{activeSlide.tagline}</p>
        <h1 className="hero-title">{activeSlide.title}</h1>
        <p className="hero-sub">{activeSlide.sub}</p>

        <div className="hero-ctas">
          <button className="btn btn-primary">View Menu</button>
          <button className="btn btn-ghost">Learn More</button>
        </div>
      </div>

      {/* Controls */}
      <button className="carousel-arrow prev-arrow" onClick={prevSlide} aria-label="Previous Slide">
        &#10094;
      </button>
      <button className="carousel-arrow next-arrow" onClick={nextSlide} aria-label="Next Slide">
        &#10095;
      </button>

      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Home