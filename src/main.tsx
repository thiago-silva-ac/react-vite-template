import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RenderRouter from './routes';
import './styles/index.css';

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container as HTMLDivElement)

function App() {
  return (
    <BrowserRouter>
        <RenderRouter />
    </BrowserRouter>
  )
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
