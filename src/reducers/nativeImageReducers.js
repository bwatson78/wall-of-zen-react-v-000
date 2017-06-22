import fetch from 'isomorphic-fetch';

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
        id: state.images.length + 1,
        url: action.url,
        name: action.name,
        votecount: action.votecount,
        tags: [action.tag_name]
      }
      return Object.assign({}, state, {
        images: state.images.concat(image),
      });
    case 'UPVOTE_IMAGE':
      function findId(image) {
        return image.id === action.id
      }
      var targetedObject = state.images.find(findId)
      const page = process.env.REACT_APP_API_URL
      fetch(`${page}/images/${action.id}`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          votecount: targetedObject.votecount + 1
        })
      })
      return Object.assign({}, state, {
        images: state.images.map(image => {
          if (image.id === action.id) {
            return Object.assign({}, image, {
              votecount: image.votecount + 1
            })
          }
          return image
        })
      });
    default:
      return state;
  }
}
