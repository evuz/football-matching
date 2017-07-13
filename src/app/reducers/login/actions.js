import { signUp, signIn, tokenSignIn } from '@/utils/api';
import { getToken } from '@/utils/localStorage';
import { setUser } from '@/reducers/user';

export function loginWithToken() {
  return (dispatch) => {
    const token = getToken();
    if (token) {
      tokenSignIn(token)
        .then(({error, user}) => {
          if (error) return error;
          dispatch(setUser(user));
        })
    } else {
      // TODO: Init app
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
