import React from 'react';
import DataDisplayComponent from './components/DataDisplayComponent';
import { DataFetchingComponent } from './components/DataFetchingComponent';

const App = () => (
  <div>
    <h1>Hello world! I&apos;m first react component!</h1>
    <div className="row">
      {`${PRODUCTION ? 'Jde' : 'Nejde'} o produkční webovku.`}
    </div>

    <DataFetchingComponent url="http://ajax0.lmsoft.cz/procedure.php?cmd=getTypesList">
      <DataDisplayComponent />
    </DataFetchingComponent>

  </div>
);

export default App;
