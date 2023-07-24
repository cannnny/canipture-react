import Header from "./Header";
import Gallery from "./Gallery";

const Mhsb = () => {
  return (
    <>
      <Header />
      <div className="subtitle">
        <h2>モンスターハンター サンブレイク</h2>
      </div>
      <div className="main-gallery">
        <Gallery name="mhsb" />
      </div>
    </>
  );
};

export default Mhsb;
