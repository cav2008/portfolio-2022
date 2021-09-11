import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import Wrapper from '@components/atoms/Wrapper';

export const AlIGNMENT = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
};

const styles = {
  [AlIGNMENT.LEFT]: {
    backgroundColor: 'bg-warmGray-100',
    justify: 'lg:justify-end',
    position: 'lg:-left-20',
  },
  [AlIGNMENT.RIGHT]: {
    backgroundColor: 'bg-gray-50',
    justify: '',
    position: 'lg:-right-20',
  },
};

const Detail = ({ logo, paragraph, image, alignment }) => (
  <div className={`${styles[alignment].backgroundColor} lg:pt-20 lg:pb-5 lg:relative lg:overflow-hidden`}>
    <Wrapper>
      <div className={`flex ${styles[alignment].justify} lg:pb-16 xl:pb-36 2xl:pb-52`}>
        <div className="py-5 px-4 lg:w-1/2">
          <div className="text-center mb-5">{logo}</div>
          <p className="text-lg text-center lg:text-left">{paragraph}</p>
        </div>
      </div>
      <div className="text-center lg:hidden">
        <div className="inline-block w-full md:w-2/3">
          <Image src={image} className="md:rounded-lg" />
        </div>
      </div>
    </Wrapper>
    <div className={`hidden lg:block lg:w-1/2 lg:absolute lg:top-20 ${styles[alignment].position}`}>
      <Image src={image} className="rounded-lg" />
    </div>
  </div>
);

Detail.propTypes = {
  logo: PropTypes.element.isRequired,
  paragraph: PropTypes.string.isRequired,
  image: PropTypes.shape({}).isRequired,
  alignment: PropTypes.string,
};

Detail.defaultProps = {
  alignment: AlIGNMENT.RIGHT,
};

export default Detail;
