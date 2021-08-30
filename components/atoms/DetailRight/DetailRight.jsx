import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import Wrapper from '@components/atoms/Wrapper';

const DetailRight = ({ logo, paragraph, sideImage }) => (
  <div className="bg-warmGray-100 lg:pt-20 lg:pb-5">
    <div className="bg-none lg:bg-bt-screenshot lg:bg-contain lg:bg-no-repeat lg:bg-origin-padding lg:bg-right">
      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:pb-16 xl:pb-36 2xl:pb-52">
          <div className="py-5 px-4">
            <div className="text-center mb-5">{logo}</div>
            <p className="text-lg text-center lg:text-left">{paragraph}</p>
          </div>
        </div>
        <div className="lg:hidden">
          <Image src={sideImage} />
        </div>
      </Wrapper>
    </div>
  </div>
);

DetailRight.propTypes = {
  logo: PropTypes.element.isRequired,
  paragraph: PropTypes.string.isRequired,
  sideImage: PropTypes.shape({}).isRequired,
};

export default DetailRight;
