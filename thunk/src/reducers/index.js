import { UPDATE_COMIC_TITLE } from '../actions';

const initialState = {
  comicTitle: '',
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMIC_TITLE:
      return {
        ...state,
        comicTitle: action.payload
      }
    default:
      return state;
  }
};