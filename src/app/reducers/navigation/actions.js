import { } from './actionTypes';
import { push } from 'react-router-redux';

export function goLogin(user) {
  return (dispatch, getState) => {
    const { route: { location } } = getState();
    const pathname = location.pathname.indexOf('login') > -1 ? location.pathname :
      location.pathname === '/' ? '/login' : `${location.pathname}/login`;
    dispatch(push(pathname));
  }
}
