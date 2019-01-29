import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';

// add the middlewares
const middlewares = [];

// add the router middleware
middlewares.push(routerMiddleware(browserHistory));
middlewares.push(thunk);


// apply the middleware
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension());
}

// create the store
const store = createStore(reducers, middleware);
const history = syncHistoryWithStore(browserHistory, store);

// export
export { store, history };
