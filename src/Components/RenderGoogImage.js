import React from 'react';

const RenderGoogImage = (props) => {
  return (
    <div className='google-image'>
      <img key={props.image.title} src={props.image.link} alt={props.image.title} width="270" />
    </div>

  )
}

export default RenderGoogImage;
