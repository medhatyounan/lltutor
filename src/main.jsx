import React from 'react'
import ReactDOM from 'react-dom/client'
// import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
// import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
