import { theme } from '@chakra-ui/pro-theme';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={ theme }>
            <App />
        </ChakraProvider>
    </React.StrictMode>
);
