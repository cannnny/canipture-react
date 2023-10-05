import Slider from "./Slider.jsx";
import GameData from "./GameData.js";

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
  return (
    <div className="home">
      <div className="slider">
        {GameData.map((element, index) => {
          return (
            <Link to={element.title_en} key={index}>
              <Slider data={galleryData[index]} isReverse={index % 2 === 0} />
            </Link>
          );
        })}
      </div>
      <div className="explanation">
        <div className="container">
          <h1>Canipture!</h1>
          <h2>Canipture!とは</h2>
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
