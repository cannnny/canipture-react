import { useState, useEffect } from "react";
import Modal from "./Modal";
import { mediaQuery, useMediaQuery } from "./Responsive";

const Gallery = (props) => {
  // 画像の表示
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          console.log("監視中");
          entry.target.classList.add("is-show");
          observer.unobserve(entry.target);
        }
      })
    });
  
    document.querySelectorAll(".gallery-picture").forEach((element) => {
      observer.observe(element);
    })

    return () => {
      document.querySelectorAll(".gallery-picture").forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  
  // モーダル
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedPic, setClickedPic] = useState("");

  const openModal = (e) => {
    setIsModalOpen(true);
    const clickedPicSrc = e.currentTarget.src;
    setClickedPic(clickedPicSrc);
    document.body.style.overflowY = "hidden";
  };

  // メディアクエリ
  const isPc = useMediaQuery(mediaQuery.pc);

  return (
    <>
      {props.currentPictures.map((url, index) => {
        return (
          <img
            key={index}
            className="gallery-picture"
            src={url}
            alt=""
            onClick={isPc ? openModal : undefined}
          />
        );
      })}
      {isPc ? (
        <Modal
          isModalOpen={isModalOpen}
          src={clickedPic}
          setIsModalOpen={() => {
            setIsModalOpen();
          }}
        />
      ) : (
        <></>
      )}
    </>
  );
};

export default Gallery;
