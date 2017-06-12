import {combineReducers} from 'redux';
import nativeImage from './nativeImageReducers'
import googImage from './googImageReducers'

const rootReducer = combineReducers({
  nativeImage,
  googImage
})

export default rootReducer;
