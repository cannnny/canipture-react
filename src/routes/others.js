// routes
import { Routes, Route, Link } from "react-router-dom";
import Totk from "./totk";
import Spl from "./spl";

function Others() {
  return (
    <div>
      <h2>menu</h2>
      <Link to="/totk"></Link>
      <Link to="/spl"></Link>
      <Routes>
        <Route path="/totk" element={<Totk />} />
        <Route path="/spl" element={<Spl />} />
      </Routes>
    </div>
  );
}

export default Others;
