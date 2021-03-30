export const UPDATE_COMIC_TITLE = 'UPDATE_COMIC_TITLE';
export const START_FETCHING_COMIC = 'START_FETCHING_COMIC';
export const END_FETCHING_COMIC = 'END_FETCHING_COMIC';

export const updateComicTitle = (newTitle) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_COMIC_TITLE,
      payload: newTitle
    });
  }
}