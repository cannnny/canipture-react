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

    // const targets = document.querySelectorAll("slider-link");
    // for (let i = 0; i < targets.length; i++) {
    //   targets[i].addEventListener("mouseover", (e) => {
    //     pointer.classList.add("isHover");
    //   });
    // }

    window.addEventListener("mousemove", mouseMoveListener);

    return () => {
      window.removeEventListener("mousemove", mouseMoveListener);
      // for (let i = 0; i < targets.length; i++) {
      //   targets[i].removeEventListener("mouseover", (e) => {
      //     pointer.classList.remove("isHover");
      //   });
      // }
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
