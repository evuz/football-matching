import { SET_USER } from './actionTypes';
import { setToken } from '@/utils/localStorage';

export * from './actions';

function user(state = {}, action) {
  switch (action.type) {
    case SET_USER:
      setToken(action.payload.user)
      return action.payload.user;
    default:
      return state;
  }
}

export default user;
