import React, {Component} from 'react';
import './App.css';
import NavBar from './NavBar';
import {connect} from 'react-redux';

import { fetchImagesAndTags } from '../actions/nativeImageActions';

class App extends Component {
  constructor(props) {
    super(props);

    // this.state = this.store.getState();
  }

  componentWillMount() {
    // this.props.dispatch(fetchImagesAndTags)
  }

  render () {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Wall Of Zen</h2>
        </div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapDispatchToProps, { fetchImagesAndTags })(App);
