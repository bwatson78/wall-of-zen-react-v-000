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
      <div>
        <img className="searched-image col-md-3 col-lg-4 thumbnail"
          key={this.props.image.title}
          src={this.props.image.link}
          alt={this.props.image.title}
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
