import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/main.css'

const root = createRoot(document.getElementById('root'))

document.addEventListener('DOMContentLoaded', (): void => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTimeout((): void => {
      const html = document.querySelector('html');
      const metaColorScheme = document.head.querySelector('meta[name="theme-color"]');

      metaColorScheme?.setAttribute('content', '#1e1e2e');
      html?.classList.add('dark');
    }, 1000);
  }
});

root.render(
  <StrictMode>
    <div className="bg-white text-dark dark:bg-base dark:text-rosewater">
      <App />
    </div>
  </StrictMode>
);
