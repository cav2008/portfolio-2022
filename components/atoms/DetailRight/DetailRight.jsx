import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from '@components/atoms/Wrapper';

const DetailRight = ({ logo, paragraph, webpage }) => (
  <div className="bg-warmGray-100">
    <Wrapper>
      <div className="py-5 px-4">
        <div className="text-center mb-5">{logo}</div>
        <p className="text-lg text-center">{paragraph}</p>
      </div>
    </Wrapper>
    {webpage}
  </div>
);

DetailRight.propTypes = {
  logo: PropTypes.element.isRequired,
  paragraph: PropTypes.string.isRequired,
  webpage: PropTypes.element.isRequired,
};

export default DetailRight;
