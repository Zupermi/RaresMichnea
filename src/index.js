import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Footer from "./components/footer/Footer"
import HeroZone from './components/hero/HeroZone';
import Grid from './components/grid/Grid';
import AboutMe from './components/aboutMe/AboutMe';
import NavBar from './components/nav/NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <WorkInProgress /> */}
    <NavBar />
    <HeroZone />
    <Grid />
    <AboutMe />
    <Footer />
  </React.StrictMode>
);
