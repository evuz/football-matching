import {
  SET_USER,
  REMOVE_USER
 } from './actionTypes';

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
