import { singUp, singIn } from '@/utils/api';
import { setUser } from '@/reducers/user';

export function loginSubmit(values) {
  return (dispatch) => {
    singIn(values)
      .then(({error, user}) => {
        if(error) return error;
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
