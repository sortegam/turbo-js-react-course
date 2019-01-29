import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import heartstoneReducer from './heartstone/redux';
// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  heartstone: heartstoneReducer
});
