import searchService from './../services/search';

export const SET_PHRASE = "SET_PHRASE";
export const SEARCH_DATA = "SEARCH_DATA";
export const SEARCH_DATA_ERROR = "SEARCH_DATA_ERROR";
export const SEARCH_DATA_SUCCESS = "SEARCH_DATA_SUCCESS";

const searchRequest = () => {
  return {
    type: SEARCH_DATA
  }
}

const searchError = (err) => {
  return {
    type: SEARCH_DATA_ERROR,
    payload: err
  }
}

const searchSuccess = (payload) => {
  return {
    type: SEARCH_DATA_SUCCESS,
    payload
  }
}

export const search = () => {
  return (dispatch, getState) => {
    dispatch(searchRequest());
    searchService(getState().search.searchPhrase)
      .then(items => dispatch(searchSuccess(items)))
      .catch(err => dispatch(searchError(err)))
  }
}

export const setPhrase = (phrase) => {
  return {
    type: SET_PHRASE,
    payload: phrase,
  };
};