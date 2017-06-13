export default function googImage(state= {
  searchText: "",
  searchImages: [],
  tagText: ''
}, action) {
  switch (action.type) {
    case 'RECEIVE_GOOG_IMAGES':
      return Object.assign({}, state, {
        searchImages: action.searchImages
      })
    case 'PROCESS_SEARCH_TEXT':
      return Object.assign({}, state, {
        searchText: action.searchText
      })
    case 'PROCESS_TAG_CHANGE':
      return Object.assign({}, state, {
        tagText: action.tagText
      })
    default:
      return state;
  }
}
