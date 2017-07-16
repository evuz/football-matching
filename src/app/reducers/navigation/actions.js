import { } from './actionTypes';
import { push } from 'react-router-redux';

export function goLogin(user) {
  return (dispatch) => {
    dispatch(push('login'))
  }
}

export function toogleLogin() {
  return (dispatch, getState) => {
    const { pathname } = getState().route.location;
    dispatch(push(pathname === '/login' ? 'register' : 'login'))
  }
}

export function goMatch(id) {
  return (dispatch, getState) => {
    const { user } = getState();
    if (!user.email) {
      return alert('You can\'t access here whitout log in with your user');
    }
    dispatch(push(`/match/${id}`));
  }
}

export function goAddMatch() {
  return (dispatch) => {
    dispatch(push('/addMatch'))
  }
}
