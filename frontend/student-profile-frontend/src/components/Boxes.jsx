import {
  faCheckCircle,
  faEye,
  faPen,
  faShareFromSquare,
  faPaperPlane,
  faX,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/Profile.css";
import pic from "../photos/profile.webp";
import { Link } from "react-router-dom";


export const UlBox = (props) => {
  return (
    <div className="right-box-inner">
      <div className="rbi-title">
        {props.icon} {props.title}
      </div>
      <div className="rbi-content">
        <ul>
          {props.items?.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const RegularBox = (props) => {
  return (
    <div className="right-box-inner">
      <div className="rbi-title">
        {props.icon} {props.title}
      </div>
      <div className="rbi-content bio">{props.content }</div>
    </div>
  );
};

export const ProfileBox = (props) => {
  return (
    <div className="box">
      <div className="l-img">
        <div className="img-box">
          <img src={props.image || pic} alt="user" loading="lazy" />
        </div>
      </div>
      <div className="l-info">
        <div className="u-name">
          @{props.username}
          <FontAwesomeIcon className="verify" icon={faCheckCircle} />
        </div>
        <div className="email">{props.email}</div>
      </div>
      {props.logged ? (
        <div className="l-btns">
          <Link to={"/profile/edit"} className="profile-btn">
            Edit Profile <FontAwesomeIcon icon={faPen} />
          </Link>
          <Link to="/" className="profile-btn">
            <FontAwesomeIcon icon={faShareFromSquare} />
          </Link>
        </div>
      ) : (
        <div className="l-btns">
          <Link to={props.viewlink || "/"} className="profile-btn">
            View <FontAwesomeIcon icon={faEye} />
          </Link>
        </div>
      )}
    </div>
  );
};

export const ProfileBoxScout = (props) => {
  return (
    <div className="box">
      <div className="l-img">
        <div className="img-box">
          <img src={props.image || pic} alt="user" loading="lazy" />
        </div>
      </div>
      <div className="l-info">
        <div className="u-name">
          @{props.username}
          <FontAwesomeIcon className="verify" icon={faCheckCircle} />
        </div>
        <div className="email">{props.email}</div>
      </div>
    </div>
  );
};
