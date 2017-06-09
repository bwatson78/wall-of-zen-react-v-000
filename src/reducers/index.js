import {combineReducers} from 'redux';
import nativeImageReducers from './nativeImageReducers'

const rootReducer = combineReducers({
  images: nativeImageReducers
})

export default rootReducer;
