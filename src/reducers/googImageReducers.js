export default function googImage(state= {
  searchText: "",
  searchImages: [],
  isModalOpen: false,
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
    case 'PROCESS_OPEN_MODAL':
      return Object.assign({}, state, {
        isModalOpen: action.isModalOpen
      })
    case 'PROCESS_CLOSE_MODAL':
      return Object.assign({}, state, {
        isModalOpen: action.isModalOpen
      })
    default:
      return state;
  }
}
