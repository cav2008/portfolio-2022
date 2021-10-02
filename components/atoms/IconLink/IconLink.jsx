import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

const IconLink = ({ link, icon }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="cursor-pointer border-2 rounded-full p-2.5 leading-none w-12 h-12 hover:bg-gray-200 hover:bg-opacity-30"
  >
    <Image src={icon} />
  </a>
);

IconLink.propTypes = {
  icon: PropTypes.shape({}).isRequired,
  link: PropTypes.string.isRequired,
};

export default IconLink;
