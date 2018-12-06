import { combineReducers } from 'redux';
import ItemsReducer from './ItemsReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
  ItemsReducer,
  UserReducer
})

export default rootReducer;
