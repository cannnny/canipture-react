import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Page from "./components/Page";
import NotFound from "./pages/NotFound";

import "./reset.css";
import "./App.scss";

const gameData = [
  // 名前もうちょい長くパッと見で判別できるように。キャメルケース
  { name_en: "totk", title: "ゼルダの伝説 ティアーズ オブ ザ キングダム" },
  { name_en: "spl", title: "Splatoon3" },
  { name_en: "animalcrossing", title: "あつまれ どうぶつの森" },
  { name_en: "mhsb", title: "モンスターハンター サンブレイク" },
];

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home games={gameData} />} />
        {/* ここはpathを/:idとしてコンポート側で該当のデータ受け取るのがベター */}
        {gameData.map((element, index) => {
          return (
            <Route
              key={index}
              path={`/${element.name_en}`}
              element={<Page title={element.title} path={element.name_en} />}
            />
          );
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
