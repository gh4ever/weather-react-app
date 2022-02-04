import React from 'react'
import WeatherSearch from './WeatherSearch'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <h1>Tereshkova Weather App</h1>
            <br />
            <WeatherSearch />
            <small>
              <a
                href="https://github.com/gh4ever/weather-react-app"
                target="_blank"
              >
                Open-source code
              </a>
              by Erika
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
