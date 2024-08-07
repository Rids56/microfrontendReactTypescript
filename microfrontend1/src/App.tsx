import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import ToDoList from './component/ToDoList'

const App = () => (
  <StrictMode>
    <ToDoList />
  </StrictMode>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)