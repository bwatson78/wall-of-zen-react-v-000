import fetch from 'isomorphic-fetch';
import React, {Component} from 'react';
import ImageList from '../Components/ImageList'

const googKey = process.env.REACT_APP_GOOG_KEY
const googCX = process.env.REACT_APP_GOOG_CX

class GoogSearch extends Component {
  constructor() {
    super();

    this.state = {
      searchText: "",
      searchImages: []
    };
  }

  processSubmit() {
    fetch(`https://www.googleapis.com/customsearch/v1?q=${this.state.searchText}&key=${googKey}&cx=${googCX}&searchType=image`)
      .then(res => res.json())
      .then((response) => this.setState({
        searchImages: response
      }))
  }

  render() {
    return (
      <ImageList images={this.state.searchImages} />
    )
  }
}

export default GoogSearch;
