import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const IconButton = ({ onClick, icon }) => (
  <button
    type="button"
    className="border-2 rounded-full p-2.5 leading-none w-12 h-12 hover:bg-gray-200 hover:bg-opacity-30"
    onClick={onClick}
  >
    <Image src={icon} />
  </button>
);

IconButton.propTypes = {
  icon: PropTypes.shape({}).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IconButton;
