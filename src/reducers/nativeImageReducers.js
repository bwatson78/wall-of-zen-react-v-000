export default function nativeImage(state= {
  images: [],
  tags: [],
  currentTag: null
}, action) {
  switch (action.type) {
    case 'REQUEST_ALL':
      return Object.assign({}, state)
    case 'RECEIVE_IMAGES_AND_TAGS':
      return Object.assign({}, state, {
        images: action.images,
        tags: action.tags
      })
    default:
      return state;
  }
}
