import React from 'react';
import RenderImage from './RenderImage';

const TaggedImageList = (props) => {

  const parsedList = () => {
    var finalArray = [];
    props.images.forEach(image => {
      image.tags.forEach(tag => {
        if (tag.tag_name === props.currentTag) {
          finalArray.push(image);
        };
      });
    });
    return finalArray;
  }

  const list = !props.currentTag ?
                  props.images :
                  parsedList();
  return (
    <div className='image-list'>
      {list.map((image) => <RenderImage image={image} />)}
    </div>
  )
}

export default TaggedImageList;
