export default function nativeImage(state= {
  images: [],
  tags: [],
  currentTag: null
}, action) {
  switch (action.type) {
    case 'CHANGE_CURRENT_TAG':
      return Object.assign({}, state, {
        currentTag: action.currentTag
      })
    case 'RECEIVE_IMAGES_AND_TAGS':
      return Object.assign({}, state, {
        images: action.images,
        tags: action.tags
      })
    default:
      return state;
  }
}
