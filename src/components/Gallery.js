import { useState } from "react";
import { client } from "./client";
import Modal from "./Modal";

const getData = await client.get({
  endpoint: "pictures",
});

const Gallery = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const data = getData.contents;
  const currentData = data.find((picture) => picture.id === props.name);
  const currentPictures = currentData.pictures;

  return (
    <>
      {currentPictures.map((element, index) => {
        return (
          <>
            <img
              key={index}
              src={element.url}
              id={index}
              alt=""
              onClick={openModal}
            />
          </>
        );
      })}
      ;
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={() => {
          setIsModalOpen();
        }}
        src={currentPictures.src}
        id={currentPictures.index}
      />
    </>
  );
};

export default Gallery;
