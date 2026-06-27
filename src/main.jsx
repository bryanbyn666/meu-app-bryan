import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 1. Importa o router
import App from './App.jsx'
import './index.css'

createRoot(
  document.getElementById('root')
).render(
  <StrictMode>
    <BrowserRouter>         
      <App />
    </BrowserRouter>
  </StrictMode>,
);