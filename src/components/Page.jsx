import Header from "./Header";
import Gallery from "./Gallery";
import GameData from "./GameData";

import { client } from "./Client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// microCMSのカテゴリーと現在のURLが一致するデータを取得
const Page = () => {
  const currentUrl = useParams();

  const [currentPageData, setCurrentPageData] = useState();
  const [currentPictures, setCurrentPictures] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // GameDataからURLと一致するゲームの情報を取得
        const data = GameData.find((item) => item.title_en === currentUrl.id);
        setCurrentPageData(data);

        // microCMSからデータを取得(URLでフィルターをかける)
        const getData = await client.get({
          endpoint: "gallery",
          queries: {
            filters: `category[equals]${data.category_id}`,
            limit: 300,
          },
        });

        // 各画像のURLを取得
        const contents = getData.contents;
        const picturesData = contents.map((pic) => {
          return pic.picture;
        });
        const picturesUrl = picturesData.map((item) => {
          return item.url;
        });
        setCurrentPictures(picturesUrl);
      } catch (error) {
        console.error("データ取得に失敗しました");
      }
    };
    fetchData();
  }, [currentUrl.id]);

  return (
    <>
      <Header />
      <div className="subtitle">
        <h2>{currentPageData ? currentPageData.title : "Loading..."}</h2>
      </div>
      <div className="main-gallery">
        {currentPictures && <Gallery currentPictures={currentPictures} />}
      </div>
    </>
  );
};

export default Page;
