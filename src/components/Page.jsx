import Header from "./Header";
import Gallery from "./Gallery";

const Page = (props) => {
  return (
    <>
      <Header />
      <div className="subtitle">
        <h2>{props.title}</h2>
      </div>
      <div className="main-gallery">
        <Gallery name={props.path} />
      </div>
    </>
  );
};

export default Page;
