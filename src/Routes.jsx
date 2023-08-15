import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Page from "./components/Page";

const RouterConfig = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home games={props.games} />} />
      {/* ここはpathを/:idとしてコンポート側で該当のデータ受け取るのがベター */}
      {props.games.map((element, index) => {
        return (
          <Route
            key={index}
            path={`/${element.name_en}`}
            element={<Page title={element.title} path={element.name_en} />}
          />
        );
      })}
    </Routes>
  );
};

export default RouterConfig;
