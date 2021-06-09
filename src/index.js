import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LoadingProvider } from './Providers/LoadingProvider';
import { AuthProvider } from './Providers/AuthProvider';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(    
    <LoadingProvider>
        <AuthProvider>
            <Router>
                <App />
            </Router>
        </AuthProvider>
    </LoadingProvider>,
    document.getElementById('root')
);