const Modal = (props) => {
  const closeModal = () => {
    props.setIsModalOpen(false);
  };

  return (
    <>
      {props.isModalOpen ? (
        <div className="overlay" onClick={closeModal}>
          <div className="content">
            <img src={props.src} alt="" />
            <button onClick={closeModal}>close</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
