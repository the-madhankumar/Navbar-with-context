import {Component} from 'react'
import ThemeContext from '../../context'
import './index.css'

class NotFound extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          const logoUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
          const themeIcon = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

          return (
            <div
              className={`main-container ${
                isDarkTheme ? 'dark-theme' : 'light-theme'
              }`}
            >
              <img src={logoUrl} alt="website logo" />
              <button type="button" data-testid="theme" onClick={toggleTheme}>
                <img src={themeIcon} alt="theme" />
              </button>
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
              />
              <h1>Lost Your Way</h1>
              <p>We cannot seem to find the page</p>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default NotFound
