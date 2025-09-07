import { Component } from 'react'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class About extends Component {
  getImage = isDarkTheme =>
    isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const { isDarkTheme } = value
          const imageUrl = this.getImage(isDarkTheme)

          return (
            <div
              className={`main-container ${isDarkTheme ? 'dark-theme' : 'light-theme'
                }`}
            >
              <img src={imageUrl} alt="about" />
              <h1>About</h1>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default About
