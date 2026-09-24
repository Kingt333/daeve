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
              <h3>Classic Sandwiches</h3>
              <p>Freshly made sandwiches with artisan bread, premium cold cuts, and crisp garden veggies.</p>
              <button className="order-now-button">Order Sandwich</button>
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
              <h3>Savory Noodles</h3>
              <p>Warm noodle bowls with rich broths, house-made sauces, and fresh toppings for every taste.</p>
              <button className="order-now-button">Order Noodles</button>
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
              <h3>Comfort Pasta</h3>
              <p>Classic and creative pasta dishes tossed in flavorful sauces made from fresh ingredients.</p>
              <button className="order-now-button">Order Pasta</button>
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
              <h3>Signature Burgers</h3>
              <p>Juicy burgers grilled to order with house sauces, melty cheese, and hand-cut fries.</p>
              <button className="order-now-button">Order Burger</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Services