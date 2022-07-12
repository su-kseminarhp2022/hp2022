import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

const elem = (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

root.render(elem);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or spend to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
