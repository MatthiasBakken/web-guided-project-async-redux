import React from 'react';
import { connect } from 'react-redux';

import Comic from './components/Comic';

import './styles.css';

function App() {
  const handleSetComicTitle = e => {
    e.preventDefault();

  }
  return (
    <div className="App">
      <h1>xkcd</h1>
      <Comic />
      <button onClick={handleSetComicTitle}>set commic title</button>
    </div>
  );
}

export default connect(() => { return {} }, { updateComicTitle })(App);
