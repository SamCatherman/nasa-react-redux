import axios from 'axios';

export default function fetchData() {
  const API_KEY = 'nope'
  const URL = 'https://api.nasa.gov/planetary/apod?api_key='
  const request = axios.get(URL+API_KEY)

  return {
    type: 'FETCH_DATA',
    payload: request
  }
}
