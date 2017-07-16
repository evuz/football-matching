import {
  SET_USER,
  REMOVE_USER,
  SET_USER_PROPERTY
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

export function setUserProperty(props) {
  return {
    type: SET_USER_PROPERTY,
    payload: {
      props
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
        dispatch(setUserProperty({
          playerId: res.player
        }))
      })
  }
}
