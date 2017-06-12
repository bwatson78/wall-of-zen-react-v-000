export const receiveGoogImages = json => {
  return {
    type: 'RECEIVE_GOOG_IMAGES',
    searchImages: json
  }
}

export const processSearchText = text => {
  return {
    type: 'PROCESS_SEARCH_TEXT',
    searchText: text
  }
}

export const processTagChange = text => {
  return {
    type: 'PROCESS_TAG_CHANGE',
    tagText: text
  }
}

export const processOpenModal = () => {
  return {
    type: 'PROCESS_OPEN_MODAL',
    isModalOpen: true
  }
}

export const processCloseModal = () => {
  return {
    type: 'PROCESS_CLOSE_MODAL',
    isModalOpen: false
  }
}
