import { singUp, singIn } from '@/utils/api';

export function loginSubmit(values) {
  return (dispatch) => {
    singIn(values)
      .then(res => {
        console.log(res);
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
