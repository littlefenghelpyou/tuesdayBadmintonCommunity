import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import WedsiteUnderMaintenance from '../main/websiteUnderMaintenance';
// import PrivateRoute from './routes/privateRoute';

import Home from '../screen/homePage';
import LoginPage from '../screen/loginPage';
import EventPage from '../screen/eventPage';
import AboutPage from '../screen/aboutPage';
import UserListPage from '../adminPage/usersListPage';
import Calendar from '../adminPage/calendar';
import Support from '../adminPage/supportPage';
import ReportBugPage from '../adminPage/reportnBugPage';


const PageRoutes = () => (
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<LoginPage />} />
  <Route path="/event/:id" element={<EventPage />} />
  <Route path="/aboutUs" element={<AboutPage />} />
  <Route path="/admin/userList" element={<UserListPage />} />
  <Route path="/admin/userManagement" element={<UserListPage />} />
  <Route path="/admin/calendar" element={<Calendar />} />
  <Route path="/admin/support" element={<Support />} />
  <Route path="/admin/report-bug" element={<ReportBugPage />} />
  {/* <Route path="/admin/calendar" element={<AdminHomePage />} /> */}
</Routes>
);

export default PageRoutes;
