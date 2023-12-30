import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import { Storee } from './redux/Storee.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <Provider store={Storee}>
        <App />
      </Provider>

  </React.StrictMode>,
)
