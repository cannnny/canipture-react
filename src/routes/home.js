import '../Home.scss';
import {Link} from 'react-router-dom';

function Home(){
    return(
        <div className="wrapper">
        <div className="logo">
          Canipture!
        </div>
        <Link className="menuLink" to="/screenshots">
          <span>▷</span>Screenshots
        </Link>
        <div className="background"></div>
      </div>
    );
}

export default Home;