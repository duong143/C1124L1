import React from 'react';
import PropTypes from 'prop-types';
import './Alert1.css';

function Alert1({ text }) {
  return (
    <div className="alert alert-warning" role="alert">
      {text}
    </div>
  );
}

Alert1.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Alert1;
