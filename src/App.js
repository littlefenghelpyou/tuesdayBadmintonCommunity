// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './screen/homePage';
import LoginPage from './screen/loginPage';
import EventPage from './screen/eventPage';
import AboutPage from './screen/aboutPage';
import HelpCentrePage from './screen/helpCentrePage'
import CollaboratePage from './screen/collaboratePage';
import WipScreen from './screen/wipScreen';
import JoinEventScreen from './screen/joinEventScreen';

import "./App.css";

const App = () => {

  return (
    <Router>
      <Routes>
        {window.innerWidth < 768 ? (
          <><Route path="/" element={<WipScreen />} /></>
        ) : (
          <><Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/event/:id" element={<EventPage />} />
          <Route path="/aboutUs" element={<AboutPage />} />
          <Route path="/help" element={<HelpCentrePage />} />
          <Route path="/collaborate" element={<CollaboratePage />} />
          <Route path="/join" element={<JoinEventScreen />} /></>
        )}
        
      </Routes>
    </Router>
  );
};

export default App;