import {
  SET_MATCH_LIST,
  SET_FETCHING_MATCH_LIST
} from './actionTypes';

export * from './actions';

const initialState = {
  fetching: false,
  list: []
};

function matchList(state = initialState, action) {
  switch (action.type) {
    case SET_MATCH_LIST:
      const { matchList } = action.payload;
      return Object.assign({}, state, { list: matchList });
    case SET_FETCHING_MATCH_LIST:
      const { fetching } = action.payload;
      return Object.assign({}, state, { fetching });
    default:
      return state;
  }
}

export default matchList;
