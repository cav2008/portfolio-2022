import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from 'next/image';

const IconButton = ({ link, icon }) => (
  <Link href={link} passHref>
    <div className="cursor-pointer border-2 rounded-full p-2.5 leading-none w-12 h-12 hover:bg-gray-200 hover:bg-opacity-30">
      <Image src={icon} />
    </div>
  </Link>
);

IconButton.propTypes = {
  icon: PropTypes.shape({}).isRequired,
  link: PropTypes.string.isRequired,
};

export default IconButton;
