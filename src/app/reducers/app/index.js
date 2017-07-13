import { SET_INIT_APP } from './actionTypes';

export * from './actions'

const initState = {
  initApp: false
}

function app(state = initState, action) {
  switch (action.type) {
    case SET_INIT_APP:
      const { initApp } = action.payload
      return Object.assign({}, state, { initApp })
    default:
      return state;
  }
}

export default app;
