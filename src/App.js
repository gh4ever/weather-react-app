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
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
