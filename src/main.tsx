import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CalculatorContextProvider } from './context/CalculatorContext';
import './style/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CalculatorContextProvider>
      <App />
    </CalculatorContextProvider>
  </React.StrictMode>,
)
