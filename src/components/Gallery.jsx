import { useState } from "react";
import { client } from "./Client";
import Modal from "./Modal";
import { mediaQuery, useMediaQuery } from "./Responsive";

const getData = await client.get({
  endpoint: "gallery",
});

const Gallery = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedPic, setClickedPic] = useState("");

  const openModal = (e) => {
    setIsModalOpen(true);
    const clickedPicSrc = e.currentTarget.src;
    setClickedPic(clickedPicSrc);
    document.body.style.overflowY = "hidden";
  };

  const data = getData.contents;
  const currentData = data.find((picture) => picture.id === props.name);
  const currentPictures = currentData.pictures;

  const isPc = useMediaQuery(mediaQuery.pc);

  return (
    <>
      {currentPictures.map((element, index) => {
        return (
          <>
            <img
              key={index}
              src={element.url}
              alt=""
              onClick={isPc ? openModal : undefined}
            />
          </>
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
