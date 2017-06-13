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
    case 'ADD_IMAGE_TO_STATE':
      const image = {
        url: action.url,
        name: action.name,
        tags: [action.tag_name]
      }
      return Object.assign({}, state, {
        images: state.images.concat(image),
      });
    default:
      return state;
  }
}
