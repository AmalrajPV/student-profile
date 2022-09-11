import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import "../css/Header.css";
import NavItems from "../helpers/Navitems";
import { NavLink, Link } from "react-router-dom";


const Headers = () => {
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
            {/* <a href="#" className="logolink"><span className="logo-first">Student</span> Profile</a> */}
          </div>
          <ul className="links">
            {
                NavItems.map((data, index)=>
                    <li className="listitems" key={index}>
                      <NavLink className="navlink" activeclassname="active" to={data.path}>{data.name}</NavLink>
                      {/* <a className="navlink" href={data.path}>{data.name}</a> */}
                    </li>
                )
            }
            {/* <li className="listitems" ><a className="navlink lgbtn">Login</a></li> */}
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
