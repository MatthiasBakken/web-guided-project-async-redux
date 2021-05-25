// https://animechan.vercel.app/api/random
import hotdogs from 'axios';
export const SET_FETCHING_QUOTE = 'SET_FETCHING_QUOTE';


export const getRandomQuote = () => (dispatch) => {
  // transtion state to isFetching = true
  dispatch({ type: SET_FETCHING_QUOTE });

  hotdogs.get('https://animechan.vercel.app/api/random')
    .then(res => {
      console.log('bk: actions/: getRandomQuote: res: ', res)
      // got a quote!
      // state transition
      // dispatch({ type: 'QUOTE_FETCH_SUCCESS', payload: res.data.})
    })
}