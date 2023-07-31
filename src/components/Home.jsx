import Slider from "./Slider.jsx";

const Home = (props) => {
  return (
    <div className="home">
      <div className="slider">
        {props.games.map((element, index) => {
          return (
            <Slider
              key={index}
              name={element.name_en}
              isReverse={index % 2 === 0}
            />
          );
        })}
      </div>
      <div className="main">
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
