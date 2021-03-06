import fetch from 'isomorphic-fetch';
import React, {Component} from 'react';
import {connect} from 'react-redux';


import GoogImageList from '../Components/GoogImageList'
import {receiveGoogImages} from '../actions/googImageActions'
import {processSearchText} from '../actions/googImageActions'

const googKey = process.env.REACT_APP_GOOG_KEY
const googCX = process.env.REACT_APP_GOOG_CX

class GoogSearch extends Component {

  processSubmit(event) {
    event.preventDefault();
    fetch(`https://www.googleapis.com/customsearch/v1?q=${this.props.googImage.searchText}&key=${googKey}&cx=${googCX}&searchType=image&imgSize=xxlarge`)
      .then(res => res.json())
      .then((response) => this.props.receiveGoogImages(response))
  }

  processChange(event) {
    this.props.processSearchText(event.target.value)
  }


  render() {
    return (
      <div className="google-form">
        <div className="input-group">
          <span className="input-group-addon">
            Search Term
          </span>
          <form onSubmit={(event) => this.processSubmit(event)}>
            <input
              className="form-control"
              type='text'
              value={this.props.googImage.searchText}
              placeholder="Enter Search Value Here"
              size="25"
              onChange={(event) => this.processChange(event)}/>
          </form>
        </div>
        {this.props.children}
        <GoogImageList images={this.props.googImage.searchImages} />
      </div>
    );
  }
};

export default connect(
  state => ({googImage: state.googImage}),
  {
    receiveGoogImages,
    processSearchText
  }
)(GoogSearch);
