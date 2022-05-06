import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import ContainerProvider from './providers/ContainerProvider';
import StorageProvider from './providers/StorageProvider';

const container = document.getElementById('root')!;
const root = createRoot(container);

declare global {
  interface Window {
      parentIFrame: any;
      iFrameResize: any;
  }
}

root.render(
  <React.StrictMode>
    <ContainerProvider>
      <StorageProvider>
        <App />
      </StorageProvider>
    </ContainerProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
