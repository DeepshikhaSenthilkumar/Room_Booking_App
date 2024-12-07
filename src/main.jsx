import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import './main.scss'
import { Provider } from 'react-redux'
import { appStore } from './utils/appStore.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={appStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
