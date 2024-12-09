import PropTypes from 'prop-types';
import React, { useState } from 'react';

const inc = (target) => {
  console.log(target);
};
const FancyNumberInput = ({
  name, id, value, onChange, min, max, step,
}) => {
  const handleIncrement = () => {
    if (value < max) {
      console.log(this);
      onChange({ target: { value: value + step } });
    }
  };

  const handleDecrement = () => {
    if (value > min) {
      onChange({ target: { value: value - step } });
    }
  };

  return (
    <div className="fancy-number-input">
      <button type="button" onClick={handleDecrement}>-</button>
      <input
        type="number"
        name={name}
        value={value}
        id={id}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
      />
      <button type="button" onClick={handleIncrement}>+</button>
    </div>
  );
};

FancyNumberInput.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
};

FancyNumberInput.defaultProps = {
  min: 1,
  max: 100,
  step: 1,
  value: 1,
};

const NumberGroup = ({ options }) => {
  const [selectedValue, setSelectedValue] = useState(1);

  const handleChange = (event) => {
    // setSelectedValue(event.target.value);
    setSelectedValue(() => inc(event.target));
  };

  return (
    options.map((option) => (
      <FancyNumberInput
        value={selectedValue}
        onChange={handleChange}
        name={`${option.name}[]`}
        id={option.name + option.id}
        min={0}
        max={10}
        step={1}
      />
    ))
  );
};

NumberGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.number,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default NumberGroup;
