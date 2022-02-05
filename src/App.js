import React from 'react'
import WeatherSearch from './WeatherSearch'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <br />
            <br />
            <h1>Tereshkova Weather App</h1>
            <br />
            <WeatherSearch />
            <br />
            <small>
              <a
                href="https://github.com/gh4ever/weather-react-app"
                target="_blank"
                rel="noreferrer"
              >
                Open-source code
              </a>{' '}
              and on{' '}
              <a
                href="https://priceless-tereshkova-1e0273.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                Netflify
              </a>{' '}
              by Erika
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
