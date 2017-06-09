import React, { Component } from 'react';

import TaggedImageList from '../Components/TaggedImageList'
import Filter from '../Components/Filter'

class TagSplash extends Component {
  constructor() {
    super();

    this.state = {
      images: [],
      tags: [],
      currentTag: null,
    }

    this.uniqueTags = this.uniqueTags.bind(this);
    this.updateCurrentTag = this.updateCurrentTag.bind(this);
  }

  uniqueTags(array) {
    const bareTags = array.map(image =>
      image.tags);
    const unflattened = flatten(bareTags).map(tagHolder =>
      tagHolder.tag_name);
    function flatten(a) {
      return Array.isArray(a) ? [].concat(...a.map(flatten)) : a;
    }
    function uniqTags(a) {
      return a.reduce(function(p, c) {
        if (p.indexOf(c) < 0) p.push(c);
        return p;
      }, []);
    };
    return uniqTags(unflattened);
  }

  componentWillMount() {
    const page = process.env.REACT_APP_API_URL
    fetch(`${page}/images`)
      .then(res => {return res.json()})
      .then(response => {
        this.setState({images: response});
        this.setState({tags: this.uniqueTags(response)})
      });
  }

  updateCurrentTag(event) {
    this.setState({currentTag: event.target.value})
  }

  render() {
    return (
      <div>
        <Filter
          tags={this.state.tags}
          updateCurrentTag={this.updateCurrentTag}
        />
        <TaggedImageList
          images={this.state.images}
          currentTag={this.state.currentTag}
        />
      </div>
    )
  }
}

export default TagSplash;
