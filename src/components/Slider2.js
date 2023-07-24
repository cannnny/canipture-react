// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { Link } from "react-router-dom";

export default function Slider2(props) {
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
    <>
      <Swiper {...swiperParams2} className="swiper2">
        {(() => {
          const slides = [];
          for (let i = 1; i < 10; i++) {
            slides.push(
              <SwiperSlide key={i}>
                <Link to={props.name}>
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
}
