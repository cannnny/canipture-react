import "./reset.css";
import "./App.scss";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function App() {
  // Swiper
  const swiperParams = {
    modules: [Autoplay],
    slidesPerView: 0.9,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 6000,
    grabCursor: true,
    watchSlidesProgress: true,
  };

  // 配列をつくる
  const swiperArray1 = [1, 2, 3, 4, 5];
  const swiperArray2 = [1, 2, 3, 4, 5];
  const swiperArray3 = [1, 2, 3, 4, 5];
  const swiperArray4 = [1, 2, 3, 4, 5];

  return (
    <div className="App">
      <header>
        <h1>Canipture!</h1>
      </header>
      <div className="contents">
        <Swiper {...swiperParams} className="swiper1">
          {swiperArray1.map((slide) => {
            return (
              <SwiperSlide>
                <img src={`../pictures/totk${slide}.jpg`} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper {...swiperParams} className="swiper2">
          {swiperArray2.map((slide) => {
            return (
              <SwiperSlide>
                <img src={`../pictures/spl${slide}.jpg`} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper {...swiperParams} className="swiper3">
          {swiperArray3.map((slide) => {
            return (
              <SwiperSlide>
                <img src={`../pictures/mhsb${slide}.jpg`} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Swiper {...swiperParams} className="swiper4">
          {swiperArray4.map((slide) => {
            return (
              <SwiperSlide>
                <img src={`../pictures/ac${slide}.jpg`} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default App;
