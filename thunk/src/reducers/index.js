import {
  FETCHING_COMIC_FAILURE,
  FETCHING_COMIC_SUCCESS,
  UPDATE_COMIC_TITLE,
  START_FETCHING_COMIC
} from '../actions';

const initialState = {
  comicTitle: '',
  comic: { img: '' },
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
    case FETCHING_COMIC_SUCCESS:
      return {
        ...state,
        comic: action.payload,
        isFetching: false
      }
    case FETCHING_COMIC_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state;
  }
};