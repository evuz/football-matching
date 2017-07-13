import { singUp, singIn, tokenSingIn } from '@/utils/api';
import { getToken } from '@/utils/localStorage';
import { setUser } from '@/reducers/user';

export function loginWithToken() {
  return (dispatch) => {
    const token = getToken();
    if (token) {
      tokenSingIn(token)
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
    singIn(values)
      .then(({ error, user }) => {
        if (error) return error;
        dispatch(setUser(user));
      })
  }
}

export function registerSubmit(values) {
  return (dispatch) => {
    singUp(values)
      .then((res) => {
        console.log(res);
      })
  }
}
