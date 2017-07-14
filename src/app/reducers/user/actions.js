import {
  SET_USER,
  REMOVE_USER
} from './actionTypes';
import { createPlayerAPI } from '@/utils/api';

export function setUser(user) {
  return {
    type: SET_USER,
    payload: {
      user
    }
  }
}

export function removeUser(user) {
  return {
    type: REMOVE_USER
  }
}

export function createPlayerSubmit(values) {
  return (dispatch, getState) => {
    const { token } = getState().user;
    createPlayerAPI(values, token)
      .then((res) => {
        console.log(res);
      })
  }
}
