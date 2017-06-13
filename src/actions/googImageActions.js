export const receiveGoogImages = json => {
  const interArray = json.items.map((image, index) =>
    (JSON.parse(`{"id": "${index}", "link": "${image.link}", "title": "${image.title}"}`)));
  return {
    type: 'RECEIVE_GOOG_IMAGES',
    searchImages: interArray
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
