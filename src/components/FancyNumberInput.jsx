import PropTypes from 'prop-types';
import React from 'react';
import '../css/FancyNumberInput.css';

const FancyNumberInput = ({
  name, value, onChange, min = 0, max = 100, step = 1,
}) => (
  <div className="fancy-number-input">
    <input
      type="number"
      name={name}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      step={step}
    />

    &nbsp;:&nbsp;
    <span>{value}</span>

  </div>
);

FancyNumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};

export default FancyNumberInput;
