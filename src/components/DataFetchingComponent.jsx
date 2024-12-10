import PropTypes from 'prop-types';
import React, {
  createContext, useState, useEffect, useMemo,
} from 'react';

const DataContext = createContext();

// Component to fetch data
const DataFetchingComponent = ({ children, url }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const convertData = (items) => Object.keys(items).map((key, index) => ({
    i: index + 1,
    id: items[key].ID,
    value: 1,
    label: items[key].typ,
    name: 'user',
  }));

  useEffect(() => {
    console.log('DataProvider mounted');
    console.log('Fetching data from:', url);
    const fetchData = async () => {
      console.log(`url: ${url}`);
      try {
        const response = await fetch(url);
        console.log(`url:${url}`);
        const result = await response.json();
        console.log(result);
        const options = convertData(result);
        setData(options); // Pass the fetched data to the parent component
        console.log(options);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);
  const value = useMemo(() => ({ data, loading }), [data, loading]);

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};
export { DataContext, DataFetchingComponent };

DataFetchingComponent.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node,

};
