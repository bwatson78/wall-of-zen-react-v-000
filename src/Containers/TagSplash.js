import React, { Component } from 'react';
import {connect} from 'react-redux';

import TaggedImageList from '../Components/TaggedImageList'
import Filter from '../Components/Filter'
import {changeCurrentTag} from '../actions/nativeImageActions'

class TagSplash extends Component {

  render() {
    return (
      <div>
        <Filter
          tags={this.props.state.tags}
          changeCurrentTag={this.props.changeCurrentTag}
        />
        <TaggedImageList
          images={this.props.state.images}
          currentTag={this.props.state.currentTag}
        />
      </div>
    )
  }
}

export default connect(
  state => ({state: state.nativeImage}),
  {
    changeCurrentTag
  }
  )(TagSplash);
