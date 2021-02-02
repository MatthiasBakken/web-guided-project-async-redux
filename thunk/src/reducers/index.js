import { QUOTE_RETRIEVED, START_FETCHING } from '../actions';

const initialState = {
  quote: null,
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};