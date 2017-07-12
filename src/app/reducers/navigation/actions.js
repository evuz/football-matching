import { } from './actionTypes';
import { push } from 'react-router-redux';

export function goLogin(user) {
  return (dispatch) => {
    dispatch(push('login'))
  }
}
