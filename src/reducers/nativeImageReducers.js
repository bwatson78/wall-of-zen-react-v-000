export default function nativeImageReducers(state= {images: [], tags: [], currentTag: null}, action) {
  switch (action.type) {
    case 'LOADING_IMAGES':
      return Object.assign({}, state)
    case 'FETCH_IMAGES':
      return {images: action.images}
    case 'FETCH_TAGS':
      return {tags: action.tags}
    default:
      return state;
  }
}
