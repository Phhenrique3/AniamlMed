import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AnimalMed from './home/AnimalMed'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < AnimalMed/>
  </StrictMode>,
)
