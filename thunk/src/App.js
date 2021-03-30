import React from 'react';
import { connect } from 'react-redux';

import Comic from './components/Comic';
import { updateComicTitle, getLatestComic } from './actions';

import './styles.css';

function App(props) {
  const handleSetComicTitle = e => {
    e.preventDefault();
    props.updateComicTitle('this is my new title');
  }

  const handleGetComic = e => {
    e.preventDefault();
    props.getLatestComic();
  }

  return (
    <div className="App">
      <h1>xkcd</h1>
      <Comic />
      <button onClick={handleGetComic}>get comic</button>
      <button onClick={handleSetComicTitle}>set comic title</button>
    </div>
  );
}

export default connect(() => { return {} }, { updateComicTitle, getLatestComic })(App);
