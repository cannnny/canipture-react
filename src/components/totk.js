import Header from "./Header";
import Gallery from "./Gallery";

const Totk = () => {
  return (
    <>
      <Header />
      <div className="subtitle">
        <h2>ゼルダの伝説 ティアーズ オブ ザ キングダム</h2>
      </div>
      <div className="main-gallery">
        {/* コンポーネント化し、ゲーム名で呼び出す */}
        <Gallery name="totk" />
        {/* スクロールに応じてサムネを表示させるようにしたい */}
        {/* クリックしたら拡大させたい */}
      </div>
    </>
  );
};

export default Totk;
