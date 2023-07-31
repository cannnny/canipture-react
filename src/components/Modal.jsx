import { useState, useEffect } from "react";

const Modal = (props) => {
  const [closing, setClosing] = useState(false);

  const closeModal = () => {
    setClosing(true);
    document.body.style.overflowY = "auto";
  };

  useEffect(() => {
    if (closing) {
      const timer = setTimeout(() => {
        props.setIsModalOpen(false);
        setClosing(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [closing, props]);

  return (
    <>
      {props.isModalOpen ? (
        <div className={`modal ${closing ? "fadeout" : ""}`}>
          <div className="overlay" onClick={closeModal}></div>
          <div className="content">
            <img src={props.src} alt="" />
            <button onClick={closeModal}></button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
