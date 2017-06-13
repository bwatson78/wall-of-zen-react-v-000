import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './Containers/App';
import ImageSplash from './Containers/ImageSplash'
import GoogSearch from './Containers/GoogSearch'
import TagSplash from './Containers/TagSplash'
import ImageAdd from './Components/ImageAdd'

export const getRoutes = (store) => (
  <Route path="/" component={App} store={store}>
    <IndexRoute component={ImageSplash}/>
    <Route path="/search" component={GoogSearch}>
      <Route path="/search/:id" component={ImageAdd}/>
    </Route>
    <Route path="/tags" component={TagSplash}/>
  </Route>
);
