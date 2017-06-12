import React, { Component } from 'react';
import {connect} from 'react-redux'

import ImageList from '../Components/ImageList'

export class ImageSplash extends Component {

  render() {
    return <ImageList images={this.props.state.images} />
  }
}

export default connect(
  state => ({state: state.nativeImage})
)(ImageSplash);
