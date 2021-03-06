import React, {Component} from 'react';
import './App.css';
import NavBar from './NavBar';
import {connect} from 'react-redux';
import 'isomorphic-fetch';

import {receiveImagesAndTags} from '../actions/nativeImageActions';

class App extends Component {

  componentDidMount() {
    const page = process.env.REACT_APP_API_URL
    fetch(`${page}/images`)
      .then(res => res.json())
      .then(response => this.props.receiveImagesAndTags(response))
  }

  render () {
    return (
      <div className="App">
        <div className="page-header">
          <h1 className="text-center">Wall Of Zen</h1>
        </div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }

}

export default connect(
  null,
  {
    receiveImagesAndTags
  }
  )(App);
