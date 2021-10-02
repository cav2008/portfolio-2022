import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import chevronRight from '@icons/chevron-right.svg';

const ButtonLink = ({ text, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="relative inline-block px-10 py-2.5 text-md leading-none no-underline rounded-lg border-2 border-teal-500 hover:bg-teal-500"
  >
    <span className="text-white">{text}</span>
    <span className="absolute right-2.5 top-2.5">
      <Image src={chevronRight} alt="chevronRight" width="16" height="16" />
    </span>
  </a>
);

ButtonLink.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string.isRequired,
};

ButtonLink.defaultProps = {
  text: '',
};

export default ButtonLink;
