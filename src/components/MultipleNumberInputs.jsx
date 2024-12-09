import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import FancyNumberInput from './FancyNumberInput';

const MultipleNumberInputs = ({ inputs }) => {
  const [values, setValues] = useState({});

  useEffect(() => {
    if (inputs && inputs.length > 0) {
      const initialValues = inputs.reduce((acc, input) => {
        acc[input.id] = input.value;
        return acc;
      }, {});
      setValues(initialValues);
    }
  }, [inputs]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: Number(value),
    });
  };
  // console.log(inputs);

  return (
    <div>
      {inputs && inputs.length > 0 ? (
        inputs.map((input) => (
          <div key={input.id}>
            <label htmlFor={input.id}>
              {input.label}
              :
            </label>
            <FancyNumberInput
              name={input.id}
              value={values[input.id]}
              onChange={handleChange}
              min={0}
              max={100}
              step={1}
            />
          </div>
        ))
      ) : (
        <p>No inputs available</p>
      )}
    </div>
  );
};
MultipleNumberInputs.propTypes = {
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MultipleNumberInputs;
