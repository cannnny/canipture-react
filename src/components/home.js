// Swiper
import Slider from "./Slider.js";

const Home = () => {
  return (
    <div className="home">
      <div className="slider">
        <Slider name="totk" />
        <Slider name="spl" />
        <Slider name="ac" />
        <Slider name="mhsb" />
      </div>
      <div className="main">
        <div className="container">
          <h1>Canipture!</h1>
          <h2>Canipture!とは</h2>
          <p>
            Nintendo
            Switchで遊べるゲームのスクリーンショットを集めたギャラリーサイトです。
          </p>
        </div>
      </div>
      <footer>@2023 YUMI DOTERA</footer>
    </div>
  );
};

export default Home;
