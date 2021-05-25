import { SET_FETCHING_QUOTE } from '../actions';

const initialState = {
  quote: {}, // {anime:'', character:'', text:''}
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};