import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WorkInProgress from './wip/WorkInProgress';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorkInProgress />
  </React.StrictMode>
);
