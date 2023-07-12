import "./reset.css";
import "./App.scss";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function App() {
  // Swiper
  const swiperParams = {
    modules: Autoplay,

    slidesPerView: 1, // コンテナ内に表示させるスライド数（CSSでサイズ指定する場合は 'auto'）
    spaceBetween: 5, // スライド間の余白（px）
    centeredSlides: true, // アクティブなスライドを中央に配置する

    loop: true, // 無限ループさせる

    speed: 3000, // スライドアニメーションのスピード（ミリ秒）

    autoplay: {
      // 自動再生させる
      delay: 3000, // 次のスライドに切り替わるまでの時間（ミリ秒）
      disableOnInteraction: false, // ユーザーが操作しても自動再生を止めない
      waitForTransition: false, // アニメーションの間も自動再生を止めない（最初のスライドの表示時間を揃えたいときに）
    },

    grabCursor: true, // PCでマウスカーソルを「掴む」マークにする
    watchSlidesProgress: true, // スライドの進行状況を監視する

    breakpoints: {
      // ブレークポイント
      600: {
        // 画面幅600px以上で適用
        slidesPerView: 2,
      },
      1025: {
        // 画面幅1025px以上で適用
        slidesPerView: 4,
        spaceBetween: 32,
      },
    },
  };

  // mapメソッドで配列をつくる

  return (
    <div className="App">
      <header>
        <h1>Canipture!</h1>
      </header>
      <div className="contents">
        <Swiper {...swiperParams}>
          <SwiperSlide></SwiperSlide>
        </Swiper>
        <Swiper {...swiperParams}></Swiper>
        <Swiper {...swiperParams}></Swiper>
      </div>
    </div>
  );
}

export default App;
