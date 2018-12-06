import { RECEIVE_ITEMS } from '../actions';

const ItemsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return { ...state, items: action.items, status: action.status };
    default:
      return state;
  }
};

export default ItemsReducer;