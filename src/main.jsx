import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PledgeProvider from './provider/PledgeProvider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PledgeProvider>
      <App />
    </PledgeProvider>
  </React.StrictMode>,
)
