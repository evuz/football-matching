import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';

import { createHashHistory } from 'history';

import user from '@/reducers/user'
import app from '@/reducers/app'

function configureStore() {
  const history = createHashHistory();
  const appReducers = combineReducers({
    route: routerReducer,
    form: formReducer,
    user,
    app
  });

  let enhacer;
  if (process.env.NODE_ENV === 'development') {
    enhacer = compose(
      applyMiddleware(thunk),
      applyMiddleware(routerMiddleware(history)),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  } else {
    enhacer = compose(
      applyMiddleware(thunk),
      applyMiddleware(routerMiddleware(history)),
    )
  }

  return { store: createStore(appReducers, enhacer), history };
}

export default configureStore;
