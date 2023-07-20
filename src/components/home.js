// Swiper
import Slider from "./Slider.js";

const Home = () => {
  // Swiper
  // const swiperParams1 = {
  //   modules: [Autoplay],
  //   slidesPerView: 1.5,
  //   spaceBetween: 10,
  //   loop: true,
  //   autoplay: {
  //     delay: 0,
  //     disableOnInteraction: false,
  //   },
  //   speed: 7000,
  //   grabCursor: true,
  //   watchSlidesProgress: true,
  //   threshold: 999999,
  // };

  // const swiperParams2 = {
  //   modules: [Autoplay],
  //   slidesPerView: 1.5,
  //   spaceBetween: 10,
  //   loop: true,
  //   autoplay: {
  //     delay: 0,
  //     disableOnInteraction: false,
  //     reverseDirection: true,
  //   },
  //   speed: 7000,
  //   grabCursor: true,
  //   watchSlidesProgress: true,
  //   threshold: 999999,
  // };
  return (
    <div className="home">
      <header>
        <h1>Canipture!</h1>
        <div className="slider">
          <Slider name="totk" />
          <Slider name="spl" />
          <Slider name="ac" />
          <Slider name="mhsb" />
        </div>
      </header>
      <div className="main">
        <div className="container">
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
