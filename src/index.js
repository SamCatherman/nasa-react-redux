import './assets/stylesheets/styles.scss';

import React from 'react'; // import the main react dependency
import ReactDOM from 'react-dom'; // import reactDOM
import { Provider } from 'react-redux';
import App from './app/App'; // import the main app component

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
  ); // render our App component and mount it to our #root element
