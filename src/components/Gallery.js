const Gallery = (props) => {
  const images = [];
  for (let i = 1; i < 22; i++) {
    // ページごとにゲームの名前を変更してコンポーネントを呼び出したい
    images.push(
      <img src={`../pictures/gl/${props.name}${i}.jpg`} alt="" key={i} />
    );
  }
  return images;

  // props.games.map(() => {
  //   console.log(props.games);
  //   return (
  //     <>
  //       <img
  //         src={`../pictures/gl/${props.name}${props.index}.jpg`}
  //         alt=""
  //         key={props.index}
  //       />
  //     </>
  //   );
  // });
};

export default Gallery;
