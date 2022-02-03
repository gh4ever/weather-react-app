import logo from './logo.svg'
import './App.css'
import 
import axios from 'axios'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="weather-app-wrapper">
            <div className="weather-app">
              <form id="search-form" className="mb-3">
                <div className="row">
                  <div className="col-9">
                    <input
                      type="search"
                      placeholder="Type a city.."
                      className="form-control"
                      id="city-input"
                      autocomplete="off"
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="submit"
                      value="Search"
                      className="btn btn-primary w-100"
                    />
                  </div>
                </div>
              </form>
              <div className="overview">
                <h1 id="city"></h1>
                <ul>
                  <li>
                    Last updated:
                    <span id="date"></span>
                  </li>
                  <li id="description"></li>
                </ul>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="clearfix weather-temperature">
                    <img src="" alt="Clear" id="icon" className="float-left" />
                    <div className="float-left">
                      <strong id="temperature"></strong>
                      <span className="units">°C</span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
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
              <div className="weather-forecast" id="forecast"></div>
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
