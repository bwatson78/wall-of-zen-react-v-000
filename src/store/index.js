import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import nativeImage from '../reducers/nativeImageReducers'

const middlewares = [thunk];

export default createStore(
  nativeImage,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middlewares)
)
