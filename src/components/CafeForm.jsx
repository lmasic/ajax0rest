import React, { useEffect, useRef, useState } from 'react';
import Button from './Button';
import MultipleRangeInputs from './MultipleRangeInputs';

const CafeForm = () => {
  const [collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(true);
  const formRef = useRef(null);
  const url = 'http://ajax0.lmsoft.cz/procedure.php?cmd=getTypesList';

  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    console.log('Form data:', data);
    // Handle form submission logic here
  };
  // /handleSubmit
  // fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setCollection(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  // /fetch

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(collection);
  const options = Object.keys(collection).map((key, index) => ({
    i: index + 1,
    // id: parseInt(collection[key].ID, 10),
    id: collection[key].ID,
    value: 1,
    label: collection[key].typ,
    name: 'user',
  }));
  console.log(options);
  return (

    <form ref={formRef} onSubmit={handleSubmit}>

      <MultipleRangeInputs inputs={options} />
      <Button
        className="pill"
        large
        type="submit"
        variant="secondary"
      >
        Odeslat
      </Button>
    </form>

  );
};
export default CafeForm;
