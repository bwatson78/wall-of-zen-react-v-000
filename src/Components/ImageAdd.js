import React, {Component} from 'react';
import {connect} from 'react-redux';
import fetch from 'isomorphic-fetch';
import AlertContainer from 'react-alert';


import {processTagChange} from '../actions/googImageActions'
import {addImageToState} from '../actions/nativeImageActions'

const page = process.env.REACT_APP_API_URL;

class ImageAdd extends Component {
  alertOptions = {
    offset: 14,
    position: 'center',
    theme: 'dark',
    transition: 'scale'
  }

  showAlert = (event) => {
    this.msg.show('Image Added!', {
      time: 10000,
      type: 'success',
    })
  }


  processChange(event) {
    this.props.processTagChange(event.target.value)
  }

  processSubmit(event) {
    event.preventDefault();
    fetch(`${page}/images`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        url: this.props.image.link,
        name: this.props.image.title,
        tags_attributes: {tag_name: this.props.googImage.tagText.split(' ')}
      })
    }
  )
  .then(this.props.addImageToState({
    url: this.props.image.link,
    name: this.props.image.title,
    tag_name: [this.props.googImage.tagText.split(' ')]}
  ))
  .then(event => this.showAlert(event))
}


  render() {
    return (
      <div className='google-image-for-adding'>
        <h3>Do you want to add "{this.props.image.title}" to your Wall?</h3>
        <img src={this.props.image.link} alt={this.props.image.title} width="100"/>
        <form onSubmit={(event) => this.processSubmit(event)}>
          <p>Add tags below and click submit when done!</p>
          <input
            type='text'
            placeholder='Type Tags Here!'
            onChange={(event) => this.processChange(event)} />
          <input type='submit'/>
        </form>
        <AlertContainer ref={a => this.msg = a} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    image: state.googImage.searchImages.find(image => image.id === ownProps.routeParams.id),
    googImage: state.googImage
  }
}

export default connect(
  mapStateToProps,
  {
    processTagChange,
    addImageToState
  }
)(ImageAdd);
