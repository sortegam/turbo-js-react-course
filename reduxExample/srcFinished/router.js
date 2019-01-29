import React from 'react';
import { Router, Route } from 'react-router';
import { history } from './store.js';
import CardsPage from './heartstone/pages/CardsPage';
import CounterPage from './heartstone/pages/CounterPage';
import ThumbPage from './heartstone/pages/ThumbPage';

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route exact path="/" component={CardsPage} />
    <Route path="/count" component={CounterPage} />
    <Route path="/thumb" component={ThumbPage} />
  </Router>
);

// export
export { router };
