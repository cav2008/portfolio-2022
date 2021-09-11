import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClick }) => (
  <button
    type="button"
    className="px-5 py-2.5 text-lg text-white text-medium leading-tight rounded-lg border-2 border-teal-500 hover:bg-teal-500"
    onClick={onClick}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  text: '',
};

export default Button;
