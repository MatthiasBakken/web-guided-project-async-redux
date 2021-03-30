import { UPDATE_COMIC_TITLE, START_FETCHING_COMIC } from '../actions';

const initialState = {
  comicTitle: '',
  comic: {},
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
    case START_FETCHING_COMIC:
      return {
        ...state,
        isFetching: true
      }
    default:
      return state;
  }
};