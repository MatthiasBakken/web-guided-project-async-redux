// https://animechan.vercel.app/api/random
import axios from 'axios';
export const SET_FETCHING_QUOTE = 'SET_FETCHING_QUOTE';
export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS';


export const getRandomQuote = () => {
  return (dispatch) => {
    // transtion state to isFetching = true
    dispatch({ type: SET_FETCHING_QUOTE });

    axios.get('https://animechan.vercel.app/api/rando')
      .then(res => {
        console.log('bk: actions/: getRandomQuote: res: ', res)
        dispatch({ type: FETCH_QUOTE_SUCCESS, payload: res.data })
        // got a quote!
        // state transition
        // dispatch({ type: 'QUOTE_FETCH_SUCCESS', payload: res.data.})
      })
      .catch(err => {
        dispatch({ type: FETCH_QUOTE_FAILURE, payload: JSON.stringify(err) })
      })
  }
}