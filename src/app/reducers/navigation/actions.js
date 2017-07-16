import { } from './actionTypes';
import { push } from 'react-router-redux';

export function goLogin(user) {
  return (dispatch) => {
    dispatch(push('/login'))
  }
}

export function toogleLogin() {
  return (dispatch, getState) => {
    const { pathname } = getState().route.location;
    dispatch(push(pathname === '/login' ? '/register' : '/login'))
  }
}

export function goUserOptions(user) {
  return (dispatch) => {
    dispatch(push('/user/options'))
  }
}
