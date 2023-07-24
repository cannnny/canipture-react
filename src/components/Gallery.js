const Gallery = (props) => {
  const images = [];
  for (let i = 1; i < 21; i++) {
    // ページごとにゲームの名前を変更してコンポーネントを呼び出したい
    images.push(
      <img src={`../pictures/gl/${props.name}${i}.jpg`} alt="" key={i} />
    );
  }
  return images;
};

export default Gallery;
