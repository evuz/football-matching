import {
  SET_MATCH_LIST,
  SET_FETCHING_MATCH_LIST
} from './actionTypes';
import { getMatchesAPI } from '@/utils/api';

export function setMatchList(matchList) {
  return {
    type: SET_MATCH_LIST,
    payload: {
      matchList
    }
  }
}

export function setFetchingMatchList(valueFetching) {
  return {
    type: SET_FETCHING_MATCH_LIST,
    payload: {
      fetching: valueFetching
    }
  }
}

export function getMatches() {
  return (dispatch) => {
    dispatch(setFetchingMatchList(true));
    getMatchesAPI()
      .then((res) => {
        dispatch(setMatchList(res.matchs));
        dispatch(setFetchingMatchList(false));
      })
      .catch((res) => dispatch(setFetchingMatchList(false)))
  }
}
