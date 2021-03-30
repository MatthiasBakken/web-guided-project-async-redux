export const UPDATE_COMIC_TITLE = 'UPDATE_COMIC_TITLE';

export const updateComicTitle = (newTitle) => {
  return (dispatch) => {
    return {
      type: UPDATE_COMIC_TITLE,
      payload: newTitle
    }
  }
}