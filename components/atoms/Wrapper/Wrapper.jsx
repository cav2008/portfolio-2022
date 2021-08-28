import React from 'react';
import PropTypes from 'prop-types';

const Wrapper = ({ children }) => <div className="max-w-screen-xl mx-auto">{children}</div>;

Wrapper.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Wrapper;
