// routes
import { Routes, Route, Link } from "react-router-dom";
import Totk from "./totk";
import Ac from "./ac";
import Mhsb from "./mhsb";

function Spl() {
  return (
    <div>
      <h2>Splatoon3</h2>
      <Link to="/totk"></Link>
      <Link to="/ac"></Link>
      <Link to="/mhsb"></Link>
      <Routes>
        <Route path="/totk" element={<Totk />} />
        <Route path="/ac" element={<Ac />} />
        <Route path="/mhsb" element={<Mhsb />} />
      </Routes>
    </div>
  );
}

export default Spl;
