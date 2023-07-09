import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

const ImageGallery = ({ images }) => {
  return (
    <>
      <List className="gallery">
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
      </List>
    </>
  );
};
export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
