import { Component } from 'react';

class ImageGalleryItem extends Component {
  state = {};

  render() {
    return (
      <li className="gallery-item">
        <img
          src={this.props.images.webformatURL}
          alt={this.props.images.tags}
        />
      </li>
    );
  }
}
export default ImageGalleryItem;
