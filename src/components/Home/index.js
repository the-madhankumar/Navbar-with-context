import { Component } from 'react'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class Home extends Component {
  getImage = theme =>
    theme
      ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

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
              <img src={imageUrl} alt="home" />
              <h1>Home</h1>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
