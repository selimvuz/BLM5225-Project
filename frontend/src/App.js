import './App.css';
import Loader from './components/Loading';
import NavigationBar from './components/NavigationBar';
import DBTable from './components/Table';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App" style={{ height: '100vh' }}>
      <Loader />
      <NavigationBar />
      <DBTable />
    </div>
  );
}

export default App;
