import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LoadingProvider } from './Providers/LoadingProvider';
import { AuthProvider } from './Providers/AuthProvider';

ReactDOM.render(    
    <LoadingProvider>
        <AuthProvider>
            <App />
        </AuthProvider>
    </LoadingProvider>,
    document.getElementById('root')
);