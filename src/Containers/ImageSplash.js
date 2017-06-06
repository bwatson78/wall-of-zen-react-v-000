import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import ImageList from '../Components/ImageList'

const page = process.env.REACT_APP_API_URL

class ImageSplash extends Component {
  constructor() {
    super();

    this.state = {
      images: []
    };
  }

  componentWillMount() {
    fetch(`${page}/images`)
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
