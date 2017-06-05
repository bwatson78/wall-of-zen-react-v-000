import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import ImageList from '../Components/ImageList'

class ImageSplash extends Component {
  constructor() {
    super();

    this.state = {
      images: []
    };
  }

  componentWillMount() {
    fetch('http://localhost:3001/images')
      .then(res => res.json())
      .then((response) => this.setState({
        images: response
      }))
  }

  render() {
    return <ImageList images={this.state.images} />
  }
}

export default ImageSplash;
