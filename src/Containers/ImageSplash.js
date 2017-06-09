import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import ImageList from '../Components/ImageList'

export class ImageSplash extends Component {
  constructor() {
    super();

    this.state = {
      images: []
    }
  }

  componentWillMount() {
    const page = process.env.REACT_APP_API_URL
    fetch(`${page}/images`)
      .then(res => {return res.json()})
      .then(response => {
        this.setState({images: response});
    });

  }

  render() {
    return <ImageList images={this.state.images} />
  }
}

export default ImageSplash;
