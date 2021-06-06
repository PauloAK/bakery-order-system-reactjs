import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LoadingProvider } from './Providers/LoadingProvider';

ReactDOM.render(    
    <LoadingProvider>
        <App />
    </LoadingProvider>,
    document.getElementById('root')
);