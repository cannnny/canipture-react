// import './reset.css';
// import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Home from './routes/home';
import Screenshots from './routes/screenshots';
import NoMatch from './routes/nomatch';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="logo">
          Canipture!
        </div>
        <a
          className="menu"
          href="/screenshots"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▷ Screenshots
        </a>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/screenshots" element={<Screenshots />} />
          <Route path="*" element={<NoMatch />} />  
        </Routes>
        <div className="background"></div>
      </div>
    </div>
  );
}

export default App;
