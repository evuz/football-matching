import { SET_USER, REMOVE_USER } from './actionTypes';
import { setToken, removeToken } from '@/utils/localStorage';

export * from './actions';

function user(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      setToken(action.payload.user);
      return action.payload.user;
    case REMOVE_USER:
      removeToken();
      return {};
    default:
      return state;
  }
}

export default user;
