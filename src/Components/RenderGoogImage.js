import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import Modal from 'react-modal';
import AlertContainer from 'react-alert';
import {connect} from 'react-redux';

import {processTagChange, processOpenModal, processCloseModal} from '../actions/googImageActions'

const page = process.env.REACT_APP_API_URL

class RenderGoogImage extends Component {
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

  processSubmit(event) {
    debugger
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
  ).then(event => this.showAlert(event))
  .then(this.closeModal(event))
}

  processChange(event) {
    this.props.processTagChange(event.target.value)
  }

  openModal(event) {
    this.props.processOpenModal()
  }

  closeModal(event) {
    event.preventDefault();
    this.props.processCloseModal()
  }

  render() {
    return (
      <div className='google-image'>
        <img
          key={this.props.image.title}
          src={this.props.image.link}
          alt={this.props.image.title}
          onClick={(event) => this.openModal(event)}
          width="270" />

        <Modal
          isOpen={this.props.googImage.isModalOpen}
          contentLabel="Modal"
        >
          <h1>You clicked on {this.props.image.title}!</h1>
          <p>Add tags below and click submit when done!</p>
          <form onSubmit={(event) => this.processSubmit(event)}>
            <input
              type='text'
              placeholder='Type Tags Here!'
              onChange={(event) => this.processChange(event)} />
            <input type='submit'/>
            <button onClick={(event) => this.closeModal(event)}>
              Cancel
            </button>
          </form>
        </Modal>
        <AlertContainer ref={a => this.msg = a} />
      </div>
    )
  }
}

export default connect(
  state => ({googImage: state.googImage}),
  {
    processTagChange,
    processOpenModal,
    processCloseModal
  }
)(RenderGoogImage);
