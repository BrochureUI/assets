import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './header/Header'
import Cards from './Cards/Cards'
import "./css/Master.css"

ReactDOM.
createRoot(document.getElementById('root'))
.render(
  <React.StrictMode>
    <Header />
    <Cards />
  </React.StrictMode>,
)
