import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getRandomQuote } from '../actions';

const Quotes = ({ quote, isFetching, error, ...props }) => {
  useEffect(() => {
  });

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching quote for ya!</h2>;
  }

  return (
    <>
      <h2>{quote.anime}</h2>
      <h2>{quote.character}</h2>
      <h2>{quote.text}</h2>
      <button onClick={() => props.getRandomQuote()}>Get new quote</button>
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

export default connect(mapStateToProps, {})(Quotes);