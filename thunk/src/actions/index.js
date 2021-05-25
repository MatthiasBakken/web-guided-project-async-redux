// https://animechan.vercel.app/api/random
export const SET_FETCHING_QUOTE = 'SET_FETCHING_QUOTE';


export const getRandomQuote = () => {
  // transtion state to isFetching = true
  return {
    type: SET_FETCHING_QUOTE
  }
}