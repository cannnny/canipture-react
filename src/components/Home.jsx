import Slider from "./Slider.jsx";
import GameData from "./GameData.js";
import MouseStalker from "./MouseStalker.jsx";

import { useState } from "react";
import { client } from "./Client";
import { Link } from "react-router-dom";

// カテゴリーごとに各々取得,slideにわたす
const galleryData = [];
for (let i = 0; i < GameData.length; i++) {
  const data = await client.get({
    endpoint: "gallery",
    queries: {
      filters: `category[equals]${GameData[i].category_id}[and]isTopShow[equals]true`,
    },
  });
  galleryData.push(data.contents);
}

const Home = () => {
  const [color, setColor] = useState("#fcc800");
  const [scale, setScale] = useState(1);
  const handleHover = (color, scale) => {
    setColor(color);
    setScale(scale);
  };

  return (
    <div className="home">
      <MouseStalker backgroundColor={color} scale={scale} />
      <div className="slider">
        {GameData.map((element, index) => {
          return (
            <Link
              className="slider-link"
              to={element.title_en}
              key={index}
              onMouseEnter={() => handleHover(element.color, 2)}
              onMouseLeave={() => handleHover("#fcc800", 1)}
            >
              <Slider data={galleryData[index]} isReverse={index % 2 === 0} />
            </Link>
          );
        })}
      </div>
      <div className="explanation">
        <div className="container">
          <h1>Canipture!</h1>
          <h2>Canipture!</h2>
          <p>
            Nintendo
            Switchで遊べるゲームのスクリーンショットを集めたギャラリーサイトです。画像をクリックするとゲームごとのページに遷移します。
          </p>
        </div>
      </div>
      <footer>@2023 YUMI DOTERA</footer>
    </div>
  );
};

export default Home;
