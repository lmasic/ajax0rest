import React, { useContext } from 'react';
import { DataProvider, DataContext } from './components/DataContext';
import DataDisplayComponent from './components/DataDisplayComponent';
import DataFetchingComponent from './components/DataFetchingComponent';

const { handleData } = useContext(DataContext);

const App = () => (
  <div>
    <h1>Hello world! I&apos;m first react component!</h1>
    <div className="row">
      {`${PRODUCTION ? 'Jde' : 'Nejde'} o produkční webovku.`}
    </div>
    <DataProvider>
      <DataFetchingComponent url="http://ajax0.lmsoft.cz/procedure.php?cmd=getTypesList" setData={handleData} />
      <DataDisplayComponent />
    </DataProvider>
  </div>
);

export default App;
