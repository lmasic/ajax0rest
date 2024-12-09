import PropTypes from 'prop-types';
import React, { createContext, useMemo, useState } from 'react';

// Create a context
export const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const value = useMemo(() => ({ data, setData }), [data]);

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node,
};
