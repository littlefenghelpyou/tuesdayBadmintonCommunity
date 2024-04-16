// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Provider} from 'react-redux';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import PageRoutes from './routes/pageRoutes';

import Home from './screen/homePage';
import LoginPage from './screen/loginPage';
import EventPage from './screen/eventPage';
import AboutPage from './screen/aboutPage';
import HelpCentrePage from './screen/helpCentrePage'
import CollaboratePage from './screen/collaboratePage';
import WipScreen from './screen/wipScreen';
import JoinEventScreen from './screen/joinEventScreen';
import UserListPage from './adminPage/usersListPage';
import Calendar from './adminPage/calendar';
import Support from './adminPage/supportPage';
import ReportBugPage from './adminPage/reportnBugPage';
import "./App.css";

const App = () => {

  return (
    <Router>
      <Routes>
      {window.innerWidth < 768 ? (
          <><Route path="/" element={<WipScreen />} /></>
        ) : (
          <>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/event/:id" element={<EventPage />} />
          <Route path="/aboutUs" element={<AboutPage />} />
          <Route path="/help" element={<HelpCentrePage />} />
          <Route path="/collaborate" element={<CollaboratePage />} />
          <Route path="/join" element={<JoinEventScreen />} />
          <Route path="/admin/userList" element={<UserListPage />} />
          <Route path="/admin/userManagement" element={<UserListPage />} />
          <Route path="/admin/calendar" element={<Calendar />} />
          <Route path="/admin/support" element={<Support />} />
          <Route path="/admin/report-bug" element={<ReportBugPage />} />
          </>
        )}
        
      </Routes>
    </Router>
  );
};

export default App;