import React from 'react';

const RenderImage = (props) => {
  return (
    <div className='image'>
      <img src={props.image.url} alt={props.image.name} width="1080" />
    </div>

  )
}

export default RenderImage;
