import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// CSS Dosyalarını Doğru React Yöntemiyle İçe Aktarma
import './styles/tokens.css'
import './styles/base.css'
import './styles/layout.css'
import './styles/components.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
