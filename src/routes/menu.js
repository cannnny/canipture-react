// routes
import { Routes, Route, Link } from "react-router-dom";
import Totk from "./totk";
import Spl from "./spl";
import Others from "./others";

function Menu() {
  return (
    <div>
      <h2>menu</h2>
      <Link to="/totk"></Link>
      <Link to="/spl"></Link>
      <Link to="/others"></Link>
      <Routes>
        <Route path="/totk" element={<Totk />} />
        <Route path="/spl" element={<Spl />} />
        <Route path="/others" element={<Others />} />
      </Routes>
    </div>
  );
}

export default Menu;
