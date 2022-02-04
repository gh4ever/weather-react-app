import React, { useState } from 'react'
import axios from 'axios'

export default function WeatherSearch() {
  let [city, setCity] = useState('')
  let [loaded, setLoaded] = useState(false)
  let [weather, setWeather] = useState({})

  function showWeather(response) {
    setLoaded(true)
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    let apiKey = `384b4ddb18472833708d25e324b56156`
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(showWeather)
  }

  function showCity(event) {
    setCity(event.target.value)
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter any city..."
        onChange={showCity}
      />
      <button type="Submit">Search</button>
    </form>
  )

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>
            Temperature: <strong>{Math.round(weather.temperature)}˚C</strong>
          </li>
          <li>
            Humidity: <strong>{weather.humidity}%</strong>
          </li>
          <li>
            Wind Speed: <strong>{weather.wind}km/h</strong>
          </li>
          <li>
            Description: <strong>{weather.description}</strong>
          </li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    )
  } else {
    return form
  }
}
