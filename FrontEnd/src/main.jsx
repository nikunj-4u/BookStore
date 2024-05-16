import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Authprovider from './context/Authprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='dark:bg-slate-900 dark:text-white'>
  <BrowserRouter>
  <Authprovider>
  <App />
  </Authprovider>
  </BrowserRouter>
    </div>
)
