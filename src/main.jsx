import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const showSection = {
  headerIsPresent: true,
  mainIsPresent: true,
  footerIsPresent: true,
  numberOfLink: 9
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App showSection={showSection} />
  </StrictMode>,
)
