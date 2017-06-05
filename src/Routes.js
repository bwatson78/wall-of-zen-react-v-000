import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './Components/App';
import ImageSplash from './Containers/ImageSplash'
import GoogSearch from './Containers/GoogSearch'

export default (
  <Route path="/" component={App} >
    <IndexRoute component={ImageSplash}/>
    <Route path ="/search" component={GoogSearch}/>
  </Route>
);
