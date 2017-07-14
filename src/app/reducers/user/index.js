import {
  SET_USER,
  REMOVE_USER,
  SET_USER_PROPERTY
} from './actionTypes';
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
    case SET_USER_PROPERTY:
      const { props } = action.payload;
      return Object.assign({}, state, props);
    default:
      return state;
  }
}

export default user;
