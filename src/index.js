import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WorkInProgress from './wip/WorkInProgress';
import NavBar from './nav/NavBar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar></NavBar>
    <WorkInProgress />
  </React.StrictMode>
);
