import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './Routes';
import './index.css';

require('dotenv').config()

ReactDOM.render(<Router history={browserHistory} routes={routes} />, document.getElementById('root'));
