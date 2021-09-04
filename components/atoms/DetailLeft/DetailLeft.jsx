import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import Wrapper from '@components/atoms/Wrapper';

const DetailLeft = ({ logo, paragraph, sideImage }) => (
  <div className="bg-white lg:pt-20 lg:pb-5 lg:relative lg:overflow-hidden">
    <Wrapper>
      <div className="flex lg:justify-end lg:pb-16 xl:pb-36 2xl:pb-52">
        <div className="py-5 px-4 lg:w-1/2">
          <div className="text-center mb-5">{logo}</div>
          <p className="text-lg text-center lg:text-left">{paragraph}</p>
        </div>
      </div>
      <div className="text-center lg:hidden">
        <div className="inline-block w-full md:w-2/3">
          <Image src={sideImage} className="md:rounded-lg" />
        </div>
      </div>
    </Wrapper>
    <div className="hidden lg:block lg:w-1/2 lg:absolute lg:top-20 lg:-left-20">
      <Image src={sideImage} className="rounded-lg" />
    </div>
  </div>
);

DetailLeft.propTypes = {
  logo: PropTypes.element.isRequired,
  paragraph: PropTypes.string.isRequired,
  sideImage: PropTypes.shape({}).isRequired,
};

export default DetailLeft;