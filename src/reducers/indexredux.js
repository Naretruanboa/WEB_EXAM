import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

/*
 * Import reducers from local location
 */
import appReducer from './Appredux.reducers';
import userReducer from './Userredux.reducers';

/*
 * Combine all to rootReducer
 */
const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,

  // combine the reduce router to store
  router: routerReducer
});

export default rootReducer;




