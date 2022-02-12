import React, { useState } from 'react'
import WeatherInfo from './WeatherInfo'
import WeatherForecast from './WeatherForecast'
import axios from 'axios'
import './Weather.css'

export default function WeatherSearch() {
  const [weatherData, setWeatherData] = useState({ ready: false })
  let [city, setCity] = useState(props.defaultCity)

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    search()
  }

  function handleCityChange(event) {
    setCity(event.target.value)
  }

  function showCity(event) {
    setCity(event.target.value)
  }

  function search() {
    const apiKey = `384b4ddb18472833708d25e324b56156`
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter the city you like"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-default w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast />
      </div>
    )
  } else {
    search()
    return 'Loading...'
  }
}
