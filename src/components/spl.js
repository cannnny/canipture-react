import Header from "./Header.js";
import Gallery from "./Gallery.js";

const Spl = () => {
  return (
    <>
      <Header />
      <div className="subtitle">
        <h2>Splatoon3</h2>
      </div>
      <div className="main-gallery">
        <Gallery name="spl" />
      </div>
    </>
  );
};

export default Spl;
