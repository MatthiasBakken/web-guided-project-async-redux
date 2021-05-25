import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getRandomQuote } from '../actions';

// const Quotes = ({ quote, isFetching, error, ...props }) => {
const Quotes = ({ quote, isFetching, error, getRandomQuote }) => {
  useEffect(() => {
  });

  if (error) {
    return <h2 style={{ color: 'red' }}>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching quote for ya!</h2>;
  }

  return (
    <>
      <h2>{quote.anime}</h2>
      <h2>{quote.character}</h2>
      <h2>{quote.quote}</h2>
      <button onClick={() => getRandomQuote()}>Get new quote</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getRandomQuote })(Quotes);