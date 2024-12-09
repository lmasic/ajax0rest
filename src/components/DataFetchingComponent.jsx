import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

// Component to fetch data
const DataFetchingComponent = ({ url, setData }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result); // Pass the fetched data to the parent component
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [setData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return null;
};
export default DataFetchingComponent;

DataFetchingComponent.propTypes = {
  url: PropTypes.string.isRequired,
  setData: PropTypes.func,

};
