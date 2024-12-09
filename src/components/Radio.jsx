import PropTypes from 'prop-types';
import React from 'react';

const RadioButton = ({
  name, value, checked, onChange, label,
}) => (
  <div>
    <label htmlFor={name}>

      <input
        type="radio"
        name={name}
        id={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className="custom-radio" />
      {label}
    </label>
  </div>
);

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default RadioButton;
