import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import {Provider} from 'react-redux'
import store from './store'

import {getRoutes} from './Routes';
import './index.css';

require('dotenv').config()

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {getRoutes(store)}
    </Router>
  </Provider>,
  document.getElementById('root')
);
