import React, { useRef } from 'react';
import Button from './components/Button';
import fetchData from './components/DataFetchingComponent';
import MultipleRangeInputs from './components/MultipleRangeInputs';

const App = () => {
  const formRef = useRef(null);
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

  // eslint-disable-next-line max-len
  // const collection = JSON.parse('{ "1": {"ID": "1", "typ": "Ml\u00e9ko"},    "2": {"ID": "2", "typ": "Espresso"},    "3": {"ID": "3", "typ": "Coffe"},    "4": {"ID": "4", "typ": "Long"},    "5": {"ID": "5", "typ": "Doppio+"}}');
  const url = 'http://ajax0.lmsoft.cz/procedure.php?cmd=getPeopleList';
  const collection = fetchData(url);
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
      <h1>Hello world! I&apos;m first react component!</h1>
      <div className="row">
        {`${PRODUCTION ? 'Jde' : 'Nejde'} o produkční webovku.`}
      </div>
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

export default App;
