import React from 'react';
import { connect } from 'react-redux';

const Comic = props => {
  return (<div>
    {`${props.comicTitle}`}
    {props.isFetching ? <div>getting comic</div>
      : props.comic.img && <img src={props.comic.img} alt="xkcd comic" />
    }
  </div>)
}

const mapStateToProps = state => {
  return {
    comicTitle: state.comicTitle,
    comic: state.comic,
    isFetching: state.isFetching,
    error: state.error
  }
}

export default connect(mapStateToProps, {})(Comic);