// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated API for React 18+
import App from './App';

// Create a root container to render your application
const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

// Render the App component inside the root container
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
