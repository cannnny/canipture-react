import { client } from "./client";

const getData = await client.get({
  endpoint: "pictures",
});

const Gallery = (props) => {
  const data = getData.contents;
  const currentData = data.find((picture) => picture.id === props.name);
  const currentPictures = currentData.pictures;
  console.log(currentPictures);

  return currentPictures.map((element, index) => {
    return <img src={element.url} alt="" key={index} />;
  });
};

export default Gallery;
