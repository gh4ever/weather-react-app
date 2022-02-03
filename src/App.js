import logo from './logo.svg'
import './App.css'
import axios from 'axios'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="container">
          <div class="weather-app-wrapper">
            <div class="weather-app">
              <form id="search-form" class="mb-3">
                <div class="row">
                  <div class="col-9">
                    <input
                      type="search"
                      placeholder="Type a city.."
                      class="form-control"
                      id="city-input"
                      autocomplete="off"
                    />
                  </div>
                  <div class="col-3">
                    <input
                      type="submit"
                      value="Search"
                      class="btn btn-primary w-100"
                    />
                  </div>
                </div>
              </form>
              <div class="overview">
                <h1 id="city"></h1>
                <ul>
                  <li>
                    Last updated:
                    <span id="date"></span>
                  </li>
                  <li id="description"></li>
                </ul>
              </div>
              <div class="row">
                <div class="col-6">
                  <div class="clearfix weather-temperature">
                    <img src="" alt="Clear" id="icon" class="float-left" />
                    <div class="float-left">
                      <strong id="temperature"></strong>
                      <span class="units">°C</span>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <ul>
                    <li>
                      Humidity:
                      <span id="humidity"></span>%
                    </li>
                    <li>
                      Wind:
                      <span id="wind"></span>
                      m/h
                    </li>
                  </ul>
                </div>
              </div>
              <div class="weather-forecast" id="forecast"></div>
            </div>
            <small>
              <a
                href="https://github.com/gh4ever/React-weather-app"
                target="_blank"
              >
                Open-source code
              </a>
              by Erika
            </small>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
