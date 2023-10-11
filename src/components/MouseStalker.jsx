import { useEffect, useState } from "react";

const MouseStalker = (props) => {
  // const pointer = document.getElementById("pointer");
  // console.log(pointer);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const mouseMoveListener = (e) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", mouseMoveListener);

    return () => {
      window.removeEventListener("mousemove", mouseMoveListener);
    };
  }, []);

  return (
    <div
      id="pointer"
      style={{
        transform: `translate(${mouseX}px, ${mouseY}px) scale(${props.scale})`,
        backgroundColor: `${props.backgroundColor}`,
      }}
    ></div>
  );
};

export default MouseStalker;
