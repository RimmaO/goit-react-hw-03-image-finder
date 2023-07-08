import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <>
      <ul className="gallery">
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
      </ul>
    </>
  );
};
export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ),
};
