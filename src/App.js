import React from 'react'
import Weather from './Weather'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tel Aviv" />

        <footer>
          This project was coded by Erika Ryu and is{' '}
          <a
            href="https://github.com/gh4ever/weather-react-app"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{' '}
          and{' '}
          <a href="https://keen-wing-865a66.netlify.app/" target="_blank">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  )
}
