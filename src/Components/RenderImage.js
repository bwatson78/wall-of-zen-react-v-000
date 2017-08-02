import React, {Component} from 'react';
import {connect} from 'react-redux';

import {upvoteImage} from '../actions/nativeImageActions'

class RenderImage extends Component {

  render() {
    return (
      <div className='image'>
        <img className="gallery" key={this.props.id} src={this.props.image.url} alt={this.props.image.name} width="1080" />
        <p>{this.props.image.votecount}</p>
        <button className="btn" onClick={event => this.props.upvoteImage(this.props.image.id, event)}>Upvote!</button>
      </div>

    )
  }

}

export default connect(
  null,
  {
    upvoteImage
  }
)(RenderImage);
