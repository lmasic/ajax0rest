import PropTypes from 'prop-types';
import React from 'react';
import '../css/FancyRangeInput.css';

const FancyRangeInput = ({
  name, value, onChange, min = 0, max = 100, step = 1,
}) => (
  <div className="fancy-range-input">
    <input
      type="range"
      name={name}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      step={step}
    />
    <span>{value}</span>
  </div>
);

FancyRangeInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};

export default FancyRangeInput;
