import axios from "axios";

export const START_FETCHING = 'START_FETCHING';
export const QUOTE_RETRIEVED = 'QUOTE_RETRIEVED';
export const FETCH_FAILED = 'FETCH_FAILED';
export const CLEAR_ERROR = 'CLEAR_ERROR';

// action creators!!
// action = plain object that has a required 'type' and optional 'payload'
// export const getQuote = () => {
// return (dispatch) => {
export const getQuote = () => (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
  dispatch({ type: START_FETCHING });
  // we can get here!!!!
  // aios
  console.log('we can call axios now!!!')
  axios.get('https://api.kanye.rest')
    .then(res => {
      console.log('bk: actions/index.js: getQuote: api res: ', res)
      dispatch({ type: QUOTE_RETRIEVED, payload: res.data.quote })
    })
    .catch(err => {
      console.error('error getting a kanye quote from api: ', err)
      dispatch({ type: FETCH_FAILED, payload: err.message })
    })
}
  // ? ? ?
  // transition to isFetching: true
  // return {
  //   type: START_FETCHING
  // }
  // now let's call the api to get the quote!
// }


//       state             action       new state
// noerror,noq,notfetch    getQuote()   error,noq,notfetch
// noerror,noq,notfetch    getQuote()   noerror,noq,yesfetch
// noerror,yesq,notfetch   getQuote()
// ...
// error,noq,notfetch      reload()
// noerror,hasq,notfetch      reload()