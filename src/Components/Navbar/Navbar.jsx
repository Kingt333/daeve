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

      <button
        className="menu-toggle"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={toggleMenu}
      >
        <span className="hamburger" />
      </button>

      <nav className="nav-links" aria-label="Main navigation">
        <a className="nav-link " href="#" onClick={() => setMenuOpen(false)}>
          <span>Home</span>
        </a>
        <a className="nav-link" href="#" onClick={() => setMenuOpen(false)}>
          <span>About</span>
        </a>
        <a className="nav-link" href="#" onClick={() => setMenuOpen(false)}>
          <span>Services</span>
        </a>
        <a className="nav-link" href="#" onClick={() => setMenuOpen(false)}>
          <span>Contact</span>
        </a>
      </nav>

      <div className="nav-actions">
        <label className="searchbar" aria-label="Search">
          <img src={searchIcon} alt="" className="search-icon" />
          <input type="text" placeholder="Search..." />
        </label>

        <div className="order-button">
          <button type="button" className="order-now-button">
             Order Now
          </button>
        </div>

        <button
          type="button"
          className="theme-button"
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={toggleTheme}
        >
          <img src={isDark ? lightModeIcon : darkModeIcon} alt="" className="theme-icon" />
        </button>
      </div>
      {/* Mobile full-width dropdown menu for better reliability */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <a className="mobile-link" href="#" onClick={() => setMenuOpen(false)}>Home</a>
        <a className="mobile-link" href="#" onClick={() => setMenuOpen(false)}>About</a>
        <a className="mobile-link" href="#" onClick={() => setMenuOpen(false)}>Services</a>
        <a className="mobile-link" href="#" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
    </header>
  )
}

export default Navbar