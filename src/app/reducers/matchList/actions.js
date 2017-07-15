import {
  SET_MATCH_LIST,
  SET_FETCHING_MATCH_LIST,
  SET_MATCH_SELECT
} from './actionTypes';
import { getMatchesAPI, getMatchAPI } from '@/utils/api';

export function setMatchList(matchList) {
  return {
    type: SET_MATCH_LIST,
    payload: {
      matchList
    }
  }
}

export function setMatchSelect(matchSelect) {
  return {
    type: SET_MATCH_SELECT,
    payload: {
      matchSelect
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

export function getMatch(id) {
  return (dispatch) => {
    dispatch(setFetchingMatchList(true));
    getMatchAPI(id)
      .then((res) => {
        dispatch(setMatchSelect(res.match));
        dispatch(setFetchingMatchList(false));
      })
      .catch(() => dispatch(setFetchingMatchList(false)))
  }
}
