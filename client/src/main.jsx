import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HelmetProvider } from "react-helmet-async";
import { startKeepAlive } from './utils/keepAlive.js';

// Start keep-alive ping to prevent Render cold start
startKeepAlive();

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </HelmetProvider>
)