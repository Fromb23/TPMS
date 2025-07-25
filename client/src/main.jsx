import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { ErrorProvider } from "@/contexts/ErrorContext";
import { UserProvider } from '@/contexts/userContext.jsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <HelmetProvider>
          <ErrorProvider>
            <UserProvider>
              <App />
            </UserProvider>
          </ErrorProvider>
        </HelmetProvider>
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
)