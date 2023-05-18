import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

window.addEventListener('keydown', (e) => {
    const button = document.getElementById(e.key.toUpperCase())?.parentElement
    button?.click()
})

ReactDOM.createRoot(document.getElementById('root')).render(<App />)