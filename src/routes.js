import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Totk from "./components/Totk";
import Spl from "./components/Spl";
import Ac from "./components/Ac";
import Mhsb from "./components/Mhsb";

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/totk" element={<Totk />} />
      <Route path="/spl" element={<Spl />} />
      <Route path="/ac" element={<Ac />} />
      <Route path="/mhsb" element={<Mhsb />} />
    </Routes>
  );
};

export default RouterConfig;
