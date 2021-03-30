import axios from 'axios';

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

export const getLatestComic = () => (dispatch) => {
  dispatch({ type: START_FETCHING_COMIC });
  //
  // axios.get('https://xkcd.com/info.0.json')
  axios.get('https://dog.ceo/api/breeds/image/random')
    .then(res => {
      console.log('bk: actions/index.js: getLatestComic: res: ', res)
    })
    .catch(err => console.error('unable to get latest comic: ', err.message))

}