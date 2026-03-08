import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ZucaGate from './zuca-gate-v4.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ZucaGate />
  </StrictMode>
)