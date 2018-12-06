import { RECEIVE_USER } from '../actions';

const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return { ...state, user: action.user, status: action.status };
    default:
      return state;
  }
};

export default UserReducer;