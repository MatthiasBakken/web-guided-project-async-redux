import { SET_FETCHING_QUOTE, FETCH_QUOTE_SUCCESS } from '../actions';

const initialState = {
  quote: {}, // {anime:'', character:'', text:''}
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FETCHING_QUOTE:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_QUOTE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        quote: { ...action.payload }
      }
    default:
      return state;
  }
};