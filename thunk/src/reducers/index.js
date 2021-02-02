import { START_FETCHING } from '../actions';

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
    default:
      return state;
  }
};