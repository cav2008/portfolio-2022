import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text }) => (
  <button
    type="button"
    className="px-5 py-2.5 text-lg text-white text-medium rounded-lg border-2 border-green-400 hover:bg-green-400"
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
};

Button.defaultProps = {
  text: '',
};

export default Button;
