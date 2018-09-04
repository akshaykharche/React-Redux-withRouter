import { combineReducers } from 'redux';
import users from './UserReducer';

const rootReducer = combineReducers({
  users
});

export default rootReducer;