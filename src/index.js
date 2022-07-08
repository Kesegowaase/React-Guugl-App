import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";

import App from './App'
import { ResultContextProvider } from "./contexts/ResultContextProvider";
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <ResultContextProvider>
        <Router>
            <App />
        </Router>
    </ResultContextProvider>
);