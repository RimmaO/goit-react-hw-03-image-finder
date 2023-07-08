import PropTypes from 'prop-types';

import { ButtonLoadMore, WrapLoadMore } from './Button.styled';

const Button = ({ onClick }) => {
  return (
    <WrapLoadMore>
      <ButtonLoadMore type="button" onClick={onClick}>
        Load more
      </ButtonLoadMore>
    </WrapLoadMore>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
