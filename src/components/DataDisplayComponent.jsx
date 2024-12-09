import React, { useContext } from 'react';
import { DataContext } from './DataContext';

const DataDisplayComponent = () => {
  const { data } = useContext(DataContext);

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default DataDisplayComponent;
