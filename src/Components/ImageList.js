import React, {Component} from 'react';
import RenderImage from './RenderImage';

class ImageList extends Component {

  render() {
    return (
      <div className='image-list container-fluid'>
        {this.props.images !== null ? this.props.images.map(image =>
          <div key={image.id}>
            <RenderImage key={image.id} image={image} />
          </div>
        ) : null}

      </div>
    )
  }
}

export default ImageList;
