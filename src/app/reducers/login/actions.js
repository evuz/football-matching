import { signUp, signIn, tokenSignIn } from '@/utils/api';
import { getToken } from '@/utils/localStorage';
import { setUser } from '@/reducers/user';
import { setInitApp } from '@/reducers/app';

export function loginWithToken() {
  return (dispatch) => {
    const token = getToken();
    if (token) {
      tokenSignIn(token)
        .then(({ error, user }) => {
          if (error) {
            dispatch(setInitApp(true))
            return error;
          }
          dispatch(setUser(user));
          dispatch(setInitApp(true))
        })
        .catch(() => dispatch(setInitApp(true)))
    } else {
      dispatch(setInitApp(true))
    }
  }
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
