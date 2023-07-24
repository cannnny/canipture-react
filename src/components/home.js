// Swiper
import Slider1 from "./Slider1.js";
import Slider2 from "./Slider2.js";

const Home = () => {
  return (
    <div className="home">
      <div className="slider">
        <Slider1 name="totk" />
        <Slider2 name="spl" />
        <Slider1 name="ac" />
        <Slider2 name="mhsb" />
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
