import { useState } from "react";
import Modal from "./Modal";
import { mediaQuery, useMediaQuery } from "./Responsive";

const Gallery = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedPic, setClickedPic] = useState("");

  // モーダル
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
            // モーダル開けるのが伝わりづらいのでhoverアクションつける
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
