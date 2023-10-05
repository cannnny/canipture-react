import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Page from "./components/Page";
import NotFound from "./pages/NotFound";

import "./reset.css";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Page />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
