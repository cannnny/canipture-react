import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Totk from "./components/totk";
import Spl from "./components/spl";
import Ac from "./components/ac";
import Mhsb from "./components/mhsb";

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
