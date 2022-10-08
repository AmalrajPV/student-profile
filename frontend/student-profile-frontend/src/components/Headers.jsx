import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import "../css/Header.css";
import NavItems from "../helpers/Navitems";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../helpers/loginContext";


const Headers = () => {
  const auth = useAuth();
  return (
    <header>
      <nav>
        <input type="checkbox" id="show-search" />
        <input type="checkbox" id="show-menu" />
        <label htmlFor="show-menu" className="menu-icon">
          <FontAwesomeIcon icon={faBars} />
        </label>
        <div className="content">
          <div className="logo">
            <Link className="logolink" to={"/"}><span className="logo-first">Student</span> Profile</Link>
          </div>
          <ul className="links">
            {
                NavItems.map((data, index)=>
                    <li className="listitems" key={index}>
                      <NavLink className="navlink" activeclassname="active" to={data.path}>{data.name}</NavLink>
                    </li>
                )
            }
            {
              (auth.user)?
              <li className="listitems" ><button className="lgbtn" onClick={()=>{auth.logout()}}>Logout</button></li>:
              <li className="listitems" ><NavLink className="lgbtn" to={"login"}>Login</NavLink></li>
            }
          </ul>
        </div>
        <label htmlFor="show-search" className="search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </label>
        <form className="search-box">
          <input
            type="search"
            placeholder="Search..."
            required
          />
          <button type="submit" className="go-icon">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </form>
      </nav>
    </header>
  );
};

export default Headers;
