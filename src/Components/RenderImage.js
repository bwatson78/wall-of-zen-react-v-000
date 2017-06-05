import React from 'react';

const RenderImage = (props) => {
  return (
    <div className='image'>
      <img src={props.url} alt={props.name}></img>
    </div>

  )
}

export default RenderImage;
