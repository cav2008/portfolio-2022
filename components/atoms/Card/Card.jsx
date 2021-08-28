import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children }) => <div className="bg-white shadow-sm lg:rounded-lg lg:shadow-lg">{children}</div>;

Card.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Card;
