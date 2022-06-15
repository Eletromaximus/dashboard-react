import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
// import reportWebVitals from './reportWebVitals'
import GlobalStyles from './GlobalStyles'

const root = ReactDOM.createRoot(document.getElementById('root') as Element)
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
)

// reportWebVitals(console.log)
