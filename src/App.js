// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './screen/homePage';
import LoginPage from './screen/loginPage';
import EventPage from './screen/eventPage';
import AboutPage from './screen/aboutPage';

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/event/:id" element={<EventPage />} />
        <Route path="/aboutUs" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;