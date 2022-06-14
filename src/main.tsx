import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import RenderRouter from './routes';
import './styles/tailwind.css';
import './styles/index.css';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnReconnect: true,
    },
  },
});

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container as HTMLDivElement);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RenderRouter />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
);
