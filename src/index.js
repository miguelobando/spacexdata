import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <ChakraProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </ChakraProvider>
  </Provider>
);
