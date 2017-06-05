import React, {Component} from 'react';
import RenderImage from './RenderImage';

class ImageList extends Component {
  render() {
    return (
      <div className='image-list'>
        {this.props.images.map(image =>
          <RenderImage image={image} />
        )}
      </div>
    )
  }
}

export default ImageList;
