import { Link } from "react-router-dom";

import "../stylesheets/notfound.scss";

function NotFound() {
  return (
    <div className="notFound">
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go back to home</Link>
    </div>
  );
}

export default NotFound;
