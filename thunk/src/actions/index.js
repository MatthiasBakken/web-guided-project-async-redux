// https://animechan.vercel.app/api/random
import axios from 'axios';
export const SET_FETCHING_QUOTE = 'SET_FETCHING_QUOTE';


export const getRandomQuote = () => {
  // transtion state to isFetching = true
  dispatch({ type: SET_FETCHING_QUOTE });

  axios.get('https://animechan.vercel.app/api/random')
    .then(res => {
      // got a quote!
      // state transition
      // dispatch({ type: 'QUOTE_FETCH_SUCCESS', payload: res.data.})
    })
}