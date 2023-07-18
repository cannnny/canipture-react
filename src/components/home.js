import { Link } from "react-router-dom";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Home = () => {
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
    threshold: 999999,
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
    threshold: 999999,
  };
  return (
    <div className="home">
      <header>
        <h1>Canipture!</h1>
        <div className="slider">
          <Swiper {...swiperParams1} className="swiper1">
            {(() => {
              const slides = [];
              for (let i = 1; i < 10; i++) {
                slides.push(
                  <SwiperSlide key={i}>
                    <Link to="/totk">
                      <img src={`../pictures/sw/totk-s${i}.jpg`} alt="" />
                    </Link>
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
                    <Link to="/spl">
                      <img src={`../pictures/sw/spl-s${i}.jpg`} alt="" />
                    </Link>
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
                    <Link to="/ac">
                      <img src={`../pictures/sw/ac-s${i}.jpg`} alt="" />
                    </Link>
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
                    <Link to="/mhsb">
                      <img src={`../pictures/sw/mhsb-s${i}.jpg`} alt="" />
                    </Link>
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
          {/* <Routes>
            <Route path="/totk" element={<Totk />} />
            <Route path="/spl" element={<Spl />} />
            <Route path="/ac" element={<Ac />} />
            <Route path="/mhsb" element={<Mhsb />} />
          </Routes> */}
        </div>
      </div>
      <footer>@2023 YUMI DOTERA</footer>
    </div>
  );
};

export default Home;
