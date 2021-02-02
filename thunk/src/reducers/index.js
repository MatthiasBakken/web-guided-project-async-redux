import { QUOTE_RETRIEVED, START_FETCHING, FETCH_FAILED, CLEAR_ERROR } from '../actions';

const initialState = {
  quote: null,
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_ERROR: {
      return {
        ...state, error: ''
      }
    }
    case START_FETCHING: {
      return {
        ...state, isFetching: true
      }
    }
    case QUOTE_RETRIEVED: {
      return {
        ...state,
        quote: action.payload,
        isFetching: false
      }
    }
    case FETCH_FAILED: {
      return {
        ...state,
        error: action.payload,
        isFetching: false
      }
    }
    default:
      return state;
  }
};