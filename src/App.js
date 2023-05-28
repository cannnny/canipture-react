import './reset.css';
import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Home from './routes/home';
import Screenshots from './routes/screenshots';
import NoMatch from './routes/nomatch';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/screenshots" element={<Screenshots />} />
          <Route path="*" element={<NoMatch />} />  
      </Routes>
    </div>
  );
}

export default App;
