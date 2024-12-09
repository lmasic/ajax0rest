import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const RadioButton = ({
  id, name, value, checked, onChange, label,
}) => (
  <div className={clsx('radio-button')}>

    <label htmlFor={id}>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <span className="custom-radio" />
      <span className="stitek">{label}</span>
    </label>
  </div>
);

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

const RadioGroup = ({ options }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    options.map((option) => (
      <RadioButton
        key={option.id}
        name={option.name}
        id={option.name + option.id}
        value={option.value}
        checked={selectedValue === option.value}
        onChange={handleChange}
        label={option.label}
      />
    ))
  );
};

RadioGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default RadioGroup;
