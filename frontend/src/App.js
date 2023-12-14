import './App.css';
import Loader from './components/Loading';
import NavigationBar from './components/NavigationBar';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Data from './components/Data';

function App() {
  const [isLoading, setIsLoading] = useState(true); // State to control loading

  return (
    <Router>
      <div className="App" style={{ height: '100vh' }}>
        <canvas id="background-canvas"></canvas>
        <Loader setIsLoading={setIsLoading} />
        {!isLoading && (
          <>
            <NavigationBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/data" element={<Data />} />
              {/* Redirect from root path to /home */}
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
