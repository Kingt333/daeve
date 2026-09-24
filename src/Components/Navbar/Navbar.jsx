import lightModeIcon from '../../assets/light_mode_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import darkModeIcon from '../../assets/dark_mode_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import searchIcon from '../../assets/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import './Navbar.css'

const Navbar = ({ theme, toggleTheme }) => {
  const isDark = theme === 'dark'

  return (
    <header className={`navbar ${isDark ? 'dark' : 'light'}`}>
      <div className="logo" aria-label="Crispy home brand">
        <span className="logo-text">Crispy</span>
      </div>

      <nav className="nav-links" aria-label="Main navigation">
        <a className="nav-link " href="#">
          <span>Home</span>
        </a>
        <a className="nav-link" href="#">
          <span>About</span>
        </a>
        <a className="nav-link" href="#">
          <span>Services</span>
        </a>
        <a className="nav-link" href="#">
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
    </header>
  )
}

export default Navbar