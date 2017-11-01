import React, { Component } from 'react';
import AstronomyCard from './AstronomyCard';
import axios from 'axios';

class AstronomyContainer extends Component {

  constructor() {
    super();

    this.state = {
      astronomy: []
    }

  }

  componentDidMount() {
    const API_KEY = 'nope'
    const URL = 'https://api.nasa.gov/planetary/apod?api_key='

    axios.get(URL+API_KEY)
      .then(res => {
        this.setState({
          astronomy: res.data
        })
        console.log(this.state.astronomy);
      })
      .catch(err => {
        console.log(err, "failed to fetch data");
      })
  }
  render() {
    const { astronomy } = this.state;
    return (
      <AstronomyCard data={astronomy}/>
    )
  }
}

export default AstronomyContainer;
