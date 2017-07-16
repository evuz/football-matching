import { SET_INIT_APP } from './actionTypes';

export function setInitApp(isInit) {
  return {
    type: SET_INIT_APP,
    payload: {
      initApp: isInit
    }
  }
}
