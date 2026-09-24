import './menu.css'

const Services = () => {
  return (
    <section id="services" className="services-page">
      <div className="services-container">
        
        {/* Header section with text on left, category link on right */}
        <div className="services-header">
          <div className="header-text">
            <span className="section-badge">POPULAR CATEGORIES</span>
            <h1 className="services-title">Our Menu</h1>
            <p className="services-desc">
              Explore our most popular m categories designed to meet your needs.
              <br />
              Fast and reliable service.
            </p>
          </div>

          <div className="cat">
            <a href="#" className="cat-link">
              <span>View all categories</span>
              <svg
                className="arrow-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 4l8 8-8 8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Responsive Grid for Service Cards */}
        <div className="services-grid">
          <div className="service-card">
            <div className="card-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80"
                alt="Food Delivery"
              />
            </div>
            <div className="card-content">
              <h3>Wood-Fired Pizza</h3>
              <p>Hand-tossed wood-fired pizzas made with fresh, locally-sourced ingredients and signature sauces.</p>
              <button className="order-now-button">Order Pizza</button>
            </div>
          </div>

          <div className="service-card">
            <div className="card-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1617196030421-5c6b7d1a5c6e?auto=format&fit=crop&w=600&q=80"
                alt="Home Cleaning"
              />
            </div>
            <div className="card-content">
              <h3>Meal Prep & Catering</h3>
              <p>Customized meal prep and catering for events — fresh, reliable, and made to order.</p>
            </div>
          </div>

          <div className="service-card">
            <div className="card-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1581091870620-1c6f7b9e4f1b?auto=format&fit=crop&w=600&q=80"
                alt="Grocery Shopping"
              />
            </div>
            <div className="card-content">
              <h3>Grocery Delivery</h3>
              <p>Quick grocery pickup and delivery with curated, fresh produce and pantry staples.</p>
            </div>
          </div>

          <div className="service-card">
            <div className="card-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1600180758895-0b1c8f3e4f1b?auto=format&fit=crop&w=600&q=80"
                alt="Package Delivery"
              />
            </div>
            <div className="card-content">
              <h3>Express Delivery</h3>
              <p>Same-day express delivery to your doorstep with real-time tracking and proof of delivery.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Services