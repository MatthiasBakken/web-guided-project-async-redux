import axios from 'axios';

export const UPDATE_COMIC_TITLE = 'UPDATE_COMIC_TITLE';
export const START_FETCHING_COMIC = 'START_FETCHING_COMIC';
export const FETCHING_COMIC_SUCCESS = 'FETCHING_COMIC_SUCCESS';
export const FETCHING_COMIC_FAILURE = 'FETCHING_COMIC_FAILURE';

export const updateComicTitle = (newTitle) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_COMIC_TITLE,
      payload: newTitle
    });
  }
}

export const getLatestComic = () => (dispatch) => {
  dispatch({ type: START_FETCHING_COMIC });
  //
  // axios.get('https://xkcd.com/info.0.json')
  setTimeout(() => {
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(res => {
        console.log('bk: actions/index.js: getLatestComic: res: ', res)
        dispatch({
          type: FETCHING_COMIC_SUCCESS,
          payload: {
            img: res.data.message
          }
        })
      })
      .catch(err => {
        console.error('unable to get latest comic: ', err.message)
        dispatch({ type: FETCHING_COMIC_FAILURE, payload: err.message })
      })
  }, 2000);

}