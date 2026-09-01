import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { registerWebMcpTools } from './utils/webMcp.ts'

// Initialize WebMCP tools for AI Agent browsers & extensions
registerWebMcpTools()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

