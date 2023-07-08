import PropTypes from 'prop-types';

import { createPortal } from 'react-dom';

import { Component } from 'react';
import { ModalContent, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  state = {};

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose(); //close modal on click Esc
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose(); // close modal on backdrop click
    }
  };

  render() {
    return createPortal(
      <Overlay className="overlay" onClick={this.handleBackdropClick}>
        <ModalContent className="modal">
          <img src={this.props.largeImageURL} alt={this.props.tags} />
        </ModalContent>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
