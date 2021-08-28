import React from 'react';
import PropTypes from 'prop-types';

const Wrapper = ({ children }) => <div className="relative max-w-screen-lg mx-auto">{children}</div>;

Wrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Wrapper;
