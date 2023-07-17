// routes
import { Routes, Route, Link } from "react-router-dom";
import Totk from "./totk";
import Spl from "./spl";
import Mhsb from "./mhsb";

function Ac() {
  return (
    <div>
      <h2>menu</h2>
      <Link to="/totk"></Link>
      <Link to="/spl"></Link>
      <Link to="/mhsb"></Link>
      <Routes>
        <Route path="/totk" element={<Totk />} />
        <Route path="/spl" element={<Spl />} />
        <Route path="/mhsb" element={<Mhsb />} />
      </Routes>
    </div>
  );
}

export default Ac;
