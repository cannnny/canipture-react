import { useState } from "react";
import { Client } from "./Client";
import Modal from "./Modal";

const getData = await Client.get({
  endpoint: "pictures",
});

const Gallery = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedPic, setClickedPic] = useState("");

  const openModal = (e) => {
    setIsModalOpen(true);
    const clickedPicSrc = e.currentTarget.src;
    setClickedPic(clickedPicSrc);
  };

  const data = getData.contents;
  const currentData = data.find((picture) => picture.id === props.name);
  const currentPictures = currentData.pictures;

  return (
    <>
      {currentPictures.map((element, index) => {
        return (
          <>
            <img key={index} src={element.url} alt="" onClick={openModal} />
          </>
        );
      })}

      <Modal
        isModalOpen={isModalOpen}
        src={clickedPic}
        setIsModalOpen={() => {
          setIsModalOpen();
        }}
      />
    </>
  );
};

export default Gallery;
