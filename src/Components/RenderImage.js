import React from 'react';

const RenderImage = (props) => {
  console.log(props);
  return (
    <div className='image'>
      <a href='image' key={props.image.id}>
        <img src={props.image.url} alt={props.image.name} width="1080" />
      </a>
    </div>

  )
}

export default RenderImage;
