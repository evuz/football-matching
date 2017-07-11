import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

function configureStore() {
  const history = createHistory();
  const appReducers = combineReducers({
    route: routerReducer
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
