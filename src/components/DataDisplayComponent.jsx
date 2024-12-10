import React, { useContext } from 'react';
import { DataContext } from './DataFetchingComponent';
import MultipleRangeInputs from './MultipleRangeInputs';

const DataDisplay = () => {
  const { data, loading } = useContext(DataContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <MultipleRangeInputs inputs={data} />
    </div>
  );
};

export default DataDisplay;
