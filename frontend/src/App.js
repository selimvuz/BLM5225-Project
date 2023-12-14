import './App.css';
import Loader from './components/Loading';
import NavigationBar from './components/NavigationBar';
import DBTable from './components/Table';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [isLoading, setIsLoading] = useState(true); // State to control loading

  return (
    <div className="App" style={{ height: '100vh' }}>
      <Loader setIsLoading={setIsLoading} />
      {!isLoading && (
        <>
          <NavigationBar />
          <DBTable />
        </>
      )}
    </div>
  );
}

export default App;
