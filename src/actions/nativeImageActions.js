function receiveImagesAndTags(json) {
  return {
    type: 'RECEIVE_IMAGES_AND_TAGS',
    images: json,
    tags: uniqueTags(json)
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
