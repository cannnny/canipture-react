import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [hoverIcon, setHoverIcon] = useState("");

  return (
    <header>
      <div className="header-left">
        <h1>Canipture!</h1>
      </div>
      <div
        className="header-right"
        onMouseEnter={() => setHoverIcon("-y")}
        onMouseLeave={() => setHoverIcon("")}
      >
        {/* ホバーしたらアイコンの画像を変える */}
        {/* ホバーありクラスとなしクラスを作り、ホバーイベントが発生したら三項演算子でクラスを付け変える？ */}
        <Link to="/spl">
          <img
            className="icon"
            src={`../icons/icon-spl${hoverIcon}.jpg`}
            alt=""
          />
        </Link>
        <Link to="/ac">
          <img
            className="icon"
            src={`../icons/icon-ac${hoverIcon}.jpg`}
            alt=""
          />
        </Link>
        <Link to="/mhsb">
          <img
            className="icon"
            src={`../icons/icon-mh${hoverIcon}.jpg`}
            alt=""
          />
        </Link>
        <Link to="/">
          <img
            className="icon"
            src={`../icons/icon-home${hoverIcon}.jpg`}
            alt=""
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
