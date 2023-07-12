import "./reset.css";
import "./App.scss";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function App() {
  // Swiper
  const swiperParams1 = {
    modules: [Autoplay],
    slidesPerView: 0.9,
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
    slidesPerView: 0.9,
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
      </header>
      <div className="contents">
        <Swiper {...swiperParams1} className="swiper1">
          {(() => {
            const slides = [];
            for (let i = 1; i < 6; i++) {
              slides.push(
                <SwiperSlide key={i}>
                  <img src={`../pictures/totk${i}.jpg`} alt="" />
                </SwiperSlide>
              );
            }
            return slides;
          })()}
        </Swiper>
        <Swiper {...swiperParams2} className="swiper2">
          {(() => {
            const slides = [];
            for (let i = 1; i < 6; i++) {
              slides.push(
                <SwiperSlide key={i}>
                  <img src={`../pictures/spl${i}.jpg`} alt="" />
                </SwiperSlide>
              );
            }
            return slides;
          })()}
        </Swiper>
        <Swiper {...swiperParams1} className="swiper3">
          {(() => {
            const slides = [];
            for (let i = 1; i < 6; i++) {
              slides.push(
                <SwiperSlide key={i}>
                  <img src={`../pictures/mhsb${i}.jpg`} alt="" />
                </SwiperSlide>
              );
            }
            return slides;
          })()}
        </Swiper>
        <Swiper {...swiperParams2} className="swiper4">
          {(() => {
            const slides = [];
            for (let i = 1; i < 6; i++) {
              slides.push(
                <SwiperSlide key={i}>
                  <img src={`../pictures/ac${i}.jpg`} alt="" />
                </SwiperSlide>
              );
            }
            return slides;
          })()}
        </Swiper>
      </div>
    </div>
  );
}

export default App;
