export const START_FETCHING = 'START_FETCHING';

// action creators!!
// action = plain object that has a required 'type' and optional 'payload'
export const getQuote = () => {

  return (dispatch) => {
    dispatch({ type: START_FETCHING });
    // we can get here!!!!
    // axios
  }
  // ? ? ?
  // transition to isFetching: true
  // return {
  //   type: START_FETCHING
  // }
  // now let's call the api to get the quote!
}


//       state             action       new state
// noerror,noq,notfetch    getQuote()   error,noq,notfetch
// noerror,noq,notfetch    getQuote()   noerror,noq,yesfetch
// noerror,yesq,notfetch   getQuote()
// ...
// error,noq,notfetch      reload()
// noerror,hasq,notfetch      reload()