import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { RedirectRoutes } from "./components/RedirectRoutes";
import './index.css'

const App = () => (
  <StrictMode>
    <RedirectRoutes />
  </StrictMode>
)

const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)