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
        {/* コンポーネント化し、ゲーム名で呼び出す */}
        <Gallery name={props.path} />
        {/* スクロールに応じてサムネを表示させるようにしたい */}
        {/* クリックしたら拡大させたい */}
      </div>
    </>
  );
};

export default Page;