import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NewsPage from './NewsPage.jsx'

// Simple routing based on pathname
const path = window.location.pathname
const isNewsPage = path.includes('/news')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {isNewsPage ? <NewsPage /> : <App />}
  </StrictMode>,
)
