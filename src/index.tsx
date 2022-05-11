import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import ContainerProvider from './providers/ContainerProvider';
import { ContainerClient } from '@statflo/textkit-widget-events';
import { LogProvider } from './providers/LogProvider';
import ContactProvider from './providers/ContactProvider';
import WidgetProvider from './providers/WidgetProvider';

export const containerClient = new ContainerClient({ window });

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
    <LogProvider>
      <ContactProvider>
        <ContainerProvider>
          <WidgetProvider>
            <App />
          </WidgetProvider>
        </ContainerProvider>
      </ContactProvider>
    </LogProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
