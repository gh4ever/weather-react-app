import React from 'react'
import Weather from './Weather'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tel Aviv" />
        <footer>
          <small>
            This project was coded by{' '}
            <a
              href="https://github.com/gh4ever"
              rel="nonreferrer"
              target="_blank"
            >
              Erika
            </a>{' '}
            and is{' '}
            <a
              href="https://github.com/gh4ever/weather-react-app"
              rel="nonreferrer"
              target="_blank"
            >
              open-sourced on GitHub
            </a>{' '}
            and{' '}
            <a
              href="https://priceless-tereshkova-1e0273.netlify.app"
              rel="nonreferrer"
              target="_blank"
            >
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  )
}
