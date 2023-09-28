import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Page from "./components/Page";
import NotFound from "./pages/NotFound";

import "./reset.css";
import "./App.scss";

const gameData = [
  {
    title_en: "tears-of-the-kingdom",
    title: "ゼルダの伝説 ティアーズ オブ ザ キングダム",
  },
  { title_en: "splatoon3", title: "Splatoon3" },
  { title_en: "animal-crossing", title: "あつまれ どうぶつの森" },
  { title_en: "monster-hunter", title: "モンスターハンター サンブレイク" },
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
              path={`/${element.title_en}`}
              element={<Page title={element.title} path={element.title_en} />}
            />
          );
        })}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
