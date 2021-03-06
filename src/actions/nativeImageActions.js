export const receiveImagesAndTags = json => {
  return {
    type: 'RECEIVE_IMAGES_AND_TAGS',
    images: json,
    tags: uniqueTags(json)
  }
}

export const changeCurrentTag = tag => {
  return {
    type: 'CHANGE_CURRENT_TAG',
    currentTag: tag
  }
}

export const addImageToState = ({url, name, votecount, tag_name}) => {
  return {
    type: 'ADD_IMAGE_TO_STATE',
    url: url,
    name: name,
    votecount: 0,
    tag_name: tag_name
  }
}

export const upvoteImage = (id) => {
  return {
    type: 'UPVOTE_IMAGE',
    id: id
  }
}

function uniqueTags(array) {
  const bareTags = array.map(image =>
    image.tags);
  const unflattened = flatten(bareTags).map(tagHolder =>
    tagHolder.tag_name);
  function flatten(a) {
    return Array.isArray(a) ? [].concat(...a.map(flatten)) : a;
  }
  function uniqTags(a) {
    return a.reduce(function(p, c) {
      if (p.indexOf(c) < 0) p.push(c);
      return p;
    }, []);
  };
  return uniqTags(unflattened);
}
