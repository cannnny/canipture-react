// routes
import { Routes, Route, Link } from "react-router-dom";
import Spl from "./spl";
import Others from "./others";

function Totk() {
  return (
    <div>
      <h2>menu</h2>
      <Link to="/spl"></Link>
      <Link to="/others"></Link>
      <Routes>
        <Route path="/spl" element={<Spl />} />
        <Route path="/others" element={<Others />} />
      </Routes>
    </div>
  );
}

export default Totk;
