// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { Link } from "react-router-dom";

const Slider = (props) => {
  const swiperParams = {
    modules: [Autoplay],
    slidesPerView: 3.5,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: props.isReverse,
    },
    speed: 7000,
    grabCursor: true,
    watchSlidesProgress: true,
    threshold: 999999,
  };

  return (
    <>
      <Swiper {...swiperParams}>
        {(() => {
          const slides = [];
          for (let i = 1; i < 10; i++) {
            slides.push(
              <SwiperSlide key={i}>
                {/* hoverで画像暗くするとかはしたい */}
                <Link to={props.name}>
                  {/* swはとりたい */}
                  {/* microCMSから取得したい */}
                  <img src={`../pictures/sw/${props.name}-s${i}.jpg`} alt="" />
                </Link>
              </SwiperSlide>
            );
          }
          return slides;
        })()}
      </Swiper>
    </>
  );
};

export default Slider;
