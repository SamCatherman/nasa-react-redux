import React, { Component } from 'react';
import AstronomyCard from './AstronomyCard';
import { connect } from 'react-redux';

class AstronomyContainer extends Component {

  componentDidMount() {
  }

  render() {

    return (
      <AstronomyCard data={astronomy}/>
    )

  }
}


function mapStateToProps(state) {
  return { astronomy: state.astronomy };
}
export default connect(mapStateToProps)(AstronomyContainer);
