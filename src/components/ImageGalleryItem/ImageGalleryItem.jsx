import PropTypes from 'prop-types';

import Modal from 'components/Modal/Modal';

import { Component } from 'react';
import { Image, Item } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  state = { showModal: false };

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  render() {
    return (
      <Item className="gallery-item">
        <Image
          src={this.props.image.webformatURL}
          alt={this.props.image.tags}
          onClick={this.toggleModal}
        />
        {this.state.showModal && ( // If showModal === true, show Modal
          <Modal
            largeImageURL={this.props.image.largeImageURL} // URL
            tags={this.props.image.tags} // tag
            onClose={this.toggleModal} // func for change state of modal
          />
        )}
      </Item>
    );
  }
}
export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};
