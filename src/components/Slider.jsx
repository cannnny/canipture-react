// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "../stylesheets/slider.scss";

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
        {props.data.map((element, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={element.picture.url} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Slider;
