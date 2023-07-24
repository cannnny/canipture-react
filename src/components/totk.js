import Header from "./Header";

const Totk = () => {
  return (
    <>
      <Header />
      <div className="screenshots">
        <h2>ゼルダの伝説 ティアーズ オブ ザ キングダム</h2>
      </div>
      <div className="main-gallery">
        {/* コンポーネント化 */}
        {(() => {
          const gallery = [];
          for (let i = 1; i < 100; i++) {
            gallery.push(
              <img src={`../pictures/gl/totk${i}.jpg`} alt="" key={i} />
            );
          }
          return gallery;
        })()}
        {/* スクロールに応じてサムネを表示させるようにしたい */}
        {/* クリックしたら拡大させたい */}
      </div>
    </>
  );
};

export default Totk;
