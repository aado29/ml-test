import {
  SET_PHRASE,
  SEARCH_DATA,
  SEARCH_DATA_ERROR,
  SEARCH_DATA_SUCCESS,
} from './../actions/search';

const initialState = {
  searchPhrase: '',
  isLoading: false,
  hasError: false,
  error: null,
  data: [],
  breadcrumb: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHRASE:
      return {
        ...state,
        searchPhrase: action.payload
      };
    case SEARCH_DATA:
      return {
        ...state,
        isLoading: true,
        hasError: false,
        error: null,
      };
    case SEARCH_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.payload,
      };
    case SEARCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.items,
        breadcrumb: action.payload.breadcrumb,
      };
    default:
      return state;
  };
};

export default todos;