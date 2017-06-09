import React, {Component} from 'react';
import RenderImage from './RenderImage';

class ImageList extends Component {
  render() {
    return (
      <div className='image-list'>
        {this.props.images !== null ? this.props.images.map(image =>
          <RenderImage key={image.id} image={image} />
        ) : null}
      </div>
    )
  }
}

export default ImageList;
