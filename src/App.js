import "./reset.css";
import "./App.scss";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// routes
import { Routes, Route, Link } from "react-router-dom";
import Totk from "./routes/totk";
import Spl from "./routes/spl";
import Others from "./routes/others";

function App() {
  // Swiper
  const swiperParams1 = {
    modules: [Autoplay],
    slidesPerView: 1.5,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 7000,
    grabCursor: true,
    watchSlidesProgress: true,
  };

  const swiperParams2 = {
    modules: [Autoplay],
    slidesPerView: 1.5,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true,
    },
    speed: 7000,
    grabCursor: true,
    watchSlidesProgress: true,
  };

  return (
    <div className="App">
      <header>
        <h1>Canipture!</h1>
        <div className="slider">
          <Swiper {...swiperParams1} className="swiper1">
            {(() => {
              const slides = [];
              for (let i = 1; i < 10; i++) {
                slides.push(
                  <SwiperSlide key={i}>
                    <img src={`../pictures/sw/totk-s${i}.jpg`} alt="" />
                  </SwiperSlide>
                );
              }
              return slides;
            })()}
          </Swiper>
          <Swiper {...swiperParams2} className="swiper2">
            {(() => {
              const slides = [];
              for (let i = 1; i < 10; i++) {
                slides.push(
                  <SwiperSlide key={i}>
                    <img src={`../pictures/sw/spl-s${i}.jpg`} alt="" />
                  </SwiperSlide>
                );
              }
              return slides;
            })()}
          </Swiper>
          <Swiper {...swiperParams1} className="swiper3">
            {(() => {
              const slides = [];
              for (let i = 1; i < 10; i++) {
                slides.push(
                  <SwiperSlide key={i}>
                    <img src={`../pictures/sw/ac-s${i}.jpg`} alt="" />
                  </SwiperSlide>
                );
              }
              return slides;
            })()}
          </Swiper>
          <Swiper {...swiperParams2} className="swiper4">
            {(() => {
              const slides = [];
              for (let i = 1; i < 10; i++) {
                slides.push(
                  <SwiperSlide key={i}>
                    <img src={`../pictures/sw/mhsb-s${i}.jpg`} alt="" />
                  </SwiperSlide>
                );
              }
              return slides;
            })()}
          </Swiper>
        </div>
      </header>
      <div className="main">
        <div className="container">
          <h2>Canipture!とは</h2>
          <p>
            Nintendo
            Switchで遊べるゲームのスクリーンショットを集めたギャラリーサイトです。
          </p>
          <button>
            <Link to="/menu">enter</Link>
          </button>
          <Routes>
            <Route path="/totk" element={<Totk />} />
            <Route path="/spl" element={<Spl />} />
            <Route path="/others" element={<Others />} />
          </Routes>
        </div>
      </div>
      <footer>@2023 YUMI DOTERA</footer>
    </div>
  );
}

export default App;
