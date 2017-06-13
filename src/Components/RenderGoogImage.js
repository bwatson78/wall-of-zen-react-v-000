import React, {Component} from 'react';
import {connect} from 'react-redux';

class RenderGoogImage extends Component {
//   }
//
//
//
//   }

  render() {
    return (
      <div className='google-image'>
        <img
          key={this.props.image.title}
          src={this.props.image.link}
          alt={this.props.image.title}
          width="270"
          />
      </div>
    )
  }
}

export default connect(
  state => ({googImage: state.googImage}),
  {

  }
)(RenderGoogImage);
