import { useState } from 'react'
import lightModeIcon from '../../assets/light_mode_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import darkModeIcon from '../../assets/dark_mode_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import searchIcon from '../../assets/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import './Navbar.css'

const Navbar = ({ theme, toggleTheme }) => {
  const isDark = theme === 'dark'
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((v) => !v)

  return (
    <header className={`navbar ${isDark ? 'dark' : 'light'} ${menuOpen ? 'open' : ''}`}>
      <div className="logo" aria-label="Crispy home brand">
        <span className="logo-text">Crispy</span>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="nav-links" aria-label="Main navigation">
        <a className="nav-link active" href="#">Home</a>
        <a className="nav-link" href="#">Menu</a>
        <a className="nav-link" href="#">About</a>
        <a className="nav-link" href="#">Contact</a>
      </nav>

      {/* Action Controls */}
      <div className="nav-actions">
        {/* Desktop-only Searchbar */}
        <label className="searchbar desktop-only" aria-label="Search">
          <img src={searchIcon} alt="" className="search-icon" />
          <input type="text" placeholder="Search..." />
        </label>

        {/* Desktop-only Order Button */}
        <button type="button" className="order-now-button desktop-only">
          Order Now
        </button>

        {/* Theme Toggle Button (Stays visible in header) */}
        <button
          type="button"
          className="theme-button"
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={toggleTheme}
        >
          <img src={isDark ? lightModeIcon : darkModeIcon} alt="" className="theme-icon" />
        </button>

        {/* Mobile Hamburger Toggle */}
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span className="hamburger" />
        </button>
      </div>

      {/* Mobile Dropdown Panel */}
      <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        {/* Mobile Searchbar */}
        <label className="searchbar mobile-searchbar" aria-label="Search">
          <img src={searchIcon} alt="" className="search-icon" />
          <input type="text" placeholder="Search..." />
        </label>

        {/* Navigation Links */}
        <a className="mobile-link" href="#" onClick={() => setMenuOpen(false)}>Home</a>
        <a className="mobile-link" href="#" onClick={() => setMenuOpen(false)}>Services</a>
        <a className="mobile-link" href="#" onClick={() => setMenuOpen(false)}>About</a>
        <a className="mobile-link" href="#" onClick={() => setMenuOpen(false)}>Contact</a>

        {/* Mobile Order Button */}
        <button type="button" className="order-now-button mobile-order-btn">
          Order Now
        </button>
      </nav>
    </header>
  )
}

export default Navbar