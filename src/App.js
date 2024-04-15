// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Provider} from 'react-redux';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import PageRoutes from './routes/pageRoutes';



import "./App.css";
export const history = createBrowserHistory({ basename: '/' });
// Initialize google analytics page view tracking
history.listen((location) => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});
const App = () => (
  <>
  <Router history={history}>
    {/* <Provider> */}
      <PageRoutes />
    {/* </Provider> */}
</Router>,
</>
);

export default App;