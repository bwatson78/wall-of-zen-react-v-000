import fetch from 'isomorphic-fetch';
import React, {Component} from 'react';
import GoogImageList from '../Components/GoogImageList'

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

  processSubmit(event) {
    event.preventDefault();
    fetch(`https://www.googleapis.com/customsearch/v1?q=${this.state.searchText}&key=${googKey}&cx=${googCX}&searchType=image`)
      .then(res => res.json())
      .then((response) => this.setState({
        searchImages: response.items
      }))
  }

  processChange(event) {
    this.setState({
      searchText: event.target.value,
    })
  }

  render() {
    return (
      <div className="google-form">
        <form onSubmit={(event) => this.processSubmit(event)}>
          <input
            type='text'
            value={this.state.searchText}
            placeholder="Enter Search Value Here"
            onChange={(event) => this.processChange(event)}/>
        </form>
        <GoogImageList images={this.state.searchImages} />
      </div>
    )
  }
}

export default GoogSearch;
