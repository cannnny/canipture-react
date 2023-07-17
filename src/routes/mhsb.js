// routes
import { Routes, Route, Link } from "react-router-dom";
import Totk from "./totk";
import Spl from "./spl";
import Ac from "./ac";

function Mhsb() {
  return (
    <div>
      <h2>menu</h2>
      <Link to="/totk"></Link>
      <Link to="/spl"></Link>
      <Link to="/ac"></Link>
      <Routes>
        <Route path="/totk" element={<Totk />} />
        <Route path="/spl" element={<Spl />} />
        <Route path="/ac" element={<Ac />} />
      </Routes>
    </div>
  );
}

export default Mhsb;
