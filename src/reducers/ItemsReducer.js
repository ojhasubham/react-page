import { RECEIVE_ITEMS } from '../actions';

const ItemsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return { ...state, json: action.json };
    default:
      return state;
  }
};

export default ItemsReducer;