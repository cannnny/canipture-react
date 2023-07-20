import { Link } from "react-router-dom";

const Totk = () => {
  return (
    <>
      <header>
        <div className="header-left">
          <h1>Canipture!</h1>
        </div>
        <div className="header-right">
          <Link to="/spl">
            <img src="../public/icons/icon-spl-y.jpg" alt="" />
          </Link>
          <Link to="/ac"></Link>
          <Link to="/mhsb"></Link>
          <Link to="/"></Link>
        </div>
      </header>
      <div className="screenshots">
        <h2>ゼルダの伝説 ティアーズ オブ ザ キングダム</h2>
      </div>
    </>
  );
};

export default Totk;
