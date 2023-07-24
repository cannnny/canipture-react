import Header from "./Header";
import Gallery from "./Gallery";

const Ac = () => {
  return (
    <>
      <Header />
      <div className="subtitle">
        <h2>あつまれ どうぶつの森</h2>
      </div>
      <div className="main-gallery">
        <Gallery name="ac" />
      </div>
    </>
  );
};

export default Ac;
