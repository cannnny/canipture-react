import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./Routes";

const gameData = [
  // 名前もうちょい長くパッと見で判別できるように。キャメルケース
  { name_en: "totk", title: "ゼルダの伝説 ティアーズ オブ ザ キングダム" },
  { name_en: "spl", title: "Splatoon3" },
  { name_en: "animalcrossing", title: "あつまれ どうぶつの森" },
  { name_en: "mhsb", title: "モンスターハンター サンブレイク" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // appで切り出したい
  <React.StrictMode>
    <BrowserRouter>
      <RouterConfig games={gameData} />
    </BrowserRouter>
  </React.StrictMode>
);
