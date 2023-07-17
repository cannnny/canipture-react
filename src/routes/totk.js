// routes
import { Routes, Route, Link } from "react-router-dom";
import Spl from "./spl";
import Ac from "./ac";
import Mhsb from "./mhsb";

function Totk() {
  return (
    <div>
      <h2>ゼルダの伝説 ティアーズ オブ ザ キングダム</h2>
      <Link to="/spl"></Link>
      <Link to="/ac"></Link>
      <Link to="/mhsb"></Link>
      <Routes>
        <Route path="/spl" element={<Spl />} />
        <Route path="/ac" element={<Ac />} />
        <Route path="/mhsb" element={<Mhsb />} />
      </Routes>
    </div>
  );
}

export default Totk;
