import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './Components/App';
import ImageSplash from './Containers/ImageSplash'
import GoogSearch from './Containers/GoogSearch'
import TagSplash from './Containers/TagSplash'

export const getRoutes = (store) => (
  <Route path="/" component={App} >
    <IndexRoute component={ImageSplash}/>
    <Route path="/search" component={GoogSearch}/>
    <Route path="/tags" component={TagSplash}/>
  </Route>
);
