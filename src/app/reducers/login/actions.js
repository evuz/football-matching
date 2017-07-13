import { signUp, signIn, tokenSignIn } from '@/utils/api';
import { getToken } from '@/utils/localStorage';
import { setUser, removeUser } from '@/reducers/user';
import { setInitApp } from '@/reducers/app';

export function loginWithToken() {
  return (dispatch) => {
    const token = getToken();
    if (token) {
      tokenSignIn(token)
        .then(({ error, user }) => {
          if (error) {
            handleError(dispatch);
            return error;
          }
          dispatch(setUser(user));
          dispatch(setInitApp(true))
        })
        .catch(() => handleError(dispatch))
    } else {
      dispatch(setInitApp(true))
    }
  }
}

function handleError(dispatch) {
  dispatch(removeUser());
  dispatch(setInitApp(true))
}

export function loginSubmit(values) {
  return (dispatch) => {
    signIn(values)
      .then(({ error, user }) => {
        if (error) return error;
        dispatch(setUser(user));
      })
  }
}

export function registerSubmit(values) {
  return (dispatch) => {
    signUp(values)
      .then((res) => {
        console.log(res);
      })
  }
}
