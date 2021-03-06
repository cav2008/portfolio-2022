import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import ButtonLink from '@components/atoms/Button/variants/ButtonLink';

const ProjectItem = ({ image, title, description, link }) => (
  <div className="relative group">
    <Image src={image} alt="chat app" className="rounded-lg" />
    <div className="hidden content-center absolute top-0 w-full h-full text-center bg-indigo-500 opacity-95 rounded-lg group-hover:grid">
      <div className="inline-block">
        <p className="font-bold text-2xl text-white mb-2.5">{title}</p>
        <p className="text-lg text-white mb-7">{description}</p>
        <ButtonLink text="Demo" link={link} />
      </div>
    </div>
  </div>
);

ProjectItem.propTypes = {
  image: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectItem;
