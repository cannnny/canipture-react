// routes
import { Routes, Route, Link } from "react-router-dom";
import Totk from "./totk";
import Others from "./others";

function Spl() {
  return (
    <div>
      <h2>menu</h2>
      <Link to="/totk"></Link>
      <Link to="/others"></Link>
      <Routes>
        <Route path="/totk" element={<Totk />} />
        <Route path="/others" element={<Others />} />
      </Routes>
    </div>
  );
}

export default Spl;
