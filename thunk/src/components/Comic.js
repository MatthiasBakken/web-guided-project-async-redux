import React from 'react';
import { connect } from 'react-redux';

const Comic = props => {
  return (<div>
    {`comic title: ${props.comicTitle}`}
  </div>)
}

const mapStateToProps = state => {
  return {
    comicTitle: state.comicTitle
  }
}

export default connect(mapStateToProps, {})(Comic);