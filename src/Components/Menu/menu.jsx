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
                src="https://images.unsplash.com/photo-1539252554453-80ab65ce3586?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Classic Sandwiches"
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
                src="https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Savory Noodles"
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
                src="https://images.unsplash.com/photo-1627042633145-b780d842ba45?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Comfort Pasta"
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
                src="https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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