import './services.css'

const Services = () => {
  return (
    <section id="services" className="services-page">
      <div className="container">
        <h1>Our Services</h1>
        <h2>POPULAR CATEGORIES</h2>
        <p className="gray">Explore our most popular service categories designed to meet your needs. <br />
        fast and reliable service</p>
      </div>

       <div className="cat">
        <p className="cat-link">
            <a href="#">View all categories</a>
            <svg className="arrow-icon" width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 4l8 8-8 8" stroke="var(--order-bg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
        </p>
       </div>
    </section>
  )
}

export default Services