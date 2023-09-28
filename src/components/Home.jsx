import Slider from "./Slider.jsx";
import { Client } from "./Client";

// カテゴリーごとに各々取得,slideにわたす
const getData1 = await Client.get({
  endpoint: "gallery",
  queries: {
    // カテゴリーの指定はカテゴリ名じゃなくidだった気がする、、microcmsの公式サイト要確認
    filters: "isTopShow[equals]true",
  },
});
const getData2 = await Client.get({
  endpoint: "gallery",
  queries: {
    filters: "category[equals]splatoon3[and]isTopShow[equals]true",
  },
});
const getData3 = await Client.get({
  endpoint: "gallery",
  queries: {
    filters: "category[equals]animal-crossing[and]isTopShow[equals]true",
  },
});
const getData4 = await Client.get({
  endpoint: "gallery",
  queries: {
    filters: "category[equals]monster-hunter[and]isTopShow[equals]true",
  },
});

const Home = (props) => {
  // 仮でgetData1のみ表示しているが、1,2,3,4を全て表示の必要あり
  const data = getData1.contents;
  console.log(data);

  return (
    <div className="home">
      <div className="slider">
        {props.games.map((element, index) => {
          return (
            <Slider
              key={element.title_en}
              data={eval(`getData${index + 1}`).contents}
              isReverse={index % 2 === 0}
            />
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
