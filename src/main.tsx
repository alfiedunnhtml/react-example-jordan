/**
 * MAIN.TSX
 * This is the very first piece of code that runs when the browser loads the site.
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Import global styles (Tailwind)
import App from './App.tsx' // Import the main App component

// 1. Find the <div> with id="root" in index.html
// 2. Create a React Root inside that div
// 3. Render our App component inside it
createRoot(document.getElementById('root')!).render(
  /* 
    StrictMode is a helper tool that highlights potential problems 
    in your code during development. It doesn't show up in the final website.
  */
  <StrictMode>
    <App />
  </StrictMode>,
)
