import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';
import Modal from 'react-modal';
import AlertContainer from 'react-alert';

const page = process.env.REACT_APP_API_URL

class RenderGoogImage extends Component {
  constructor() {
    super();
    this.state = {
      isModalOpen: false,
      tagText: ''
    };

    this.showAlert = this.showAlert.bind(this);
  }

  alertOptions = {
    offset: 14,
    position: 'center',
    theme: 'dark',
    transition: 'scale'
  }

  showAlert = () => {
    this.msg.show('Image Added!', {
      time: 10000,
      type: 'success',
    })
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
        tags_attributes: {tag_name: this.state.tagText.split(' ')}
      })
    }
  ).then(this.showAlert)
  .then(this.closeModal(event))
}

  processChange(event) {
    this.setState({tagText: event.target.value})
  }

  openModal(event) {
    this.setState({isModalOpen: true})
  }

  closeModal(event) {
    event.preventDefault();
    this.setState({isModalOpen: false})
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
          isOpen={this.state.isModalOpen}
          contentLabel="Modal">
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

export default RenderGoogImage;
