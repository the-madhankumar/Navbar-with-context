import { Component } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class Navbar extends Component {
  getLogo = isDarkTheme =>
    isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

  getThemeIcon = isDarkTheme =>
    isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const { isDarkTheme, toggleTheme } = value
          const logoUrl = this.getLogo(isDarkTheme)
          const themeIcon = this.getThemeIcon(isDarkTheme)

          return (
            <div
              className={`main-container ${isDarkTheme ? 'dark-theme' : 'light-theme'
                }`}
            >
              <div className="img-container">
                <img src={logoUrl} alt="website logo" />
              </div>
              <div className="nav-links">
                <ul className="nav-items">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                </ul>
              </div>
              <div className="theme">
                <button type="button" data-testid="theme" onClick={toggleTheme}>
                  <img src={themeIcon} alt="theme" />
                </button>
              </div>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Navbar
