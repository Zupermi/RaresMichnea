import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< HEAD
import WorkInProgress from './wip/WorkInProgress';
import NavBar from './nav/NavBar';

=======
import WorkInProgress from './components/wip/WorkInProgress';
import Footer from "./components/footer/Footer"
import HeroZone from './components/hero/HeroZone';
import Grid from './components/grid/Grid';
import AboutMe from './components/aboutMe/AboutMe';
>>>>>>> 2e148a5 (add footer and hero zone templates)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <NavBar></NavBar>
    <WorkInProgress />
=======
    {/* <WorkInProgress /> */}
    <HeroZone />
    <Grid />
    <AboutMe />
    <Footer />
>>>>>>> 2e148a5 (add footer and hero zone templates)
  </React.StrictMode>
);
