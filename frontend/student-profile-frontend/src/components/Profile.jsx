import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGraduationCap,
  faBriefcase,
  faCogs,
  faIndustry,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faLinkedinIn,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import "../css/Profile.css";
import { UlBox, RegularBox, ProfileBox, ProfileBoxScout } from "./Boxes";
import { motion } from "framer-motion";

const Profile = (props) => {
  return (
    <motion.div
      className="prof-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="left-box">
        {props.scout ? (
          <ProfileBoxScout
          username={props.data.user?.username}
          email={props.data.user?.email}
        />
        ) : (
          <ProfileBox
            username={props.data.user?.username}
            email={props.data.user?.email}
            logged={props.logged}
          />
        )}
        <div className="box">
          <div className="socials">
            <a
              href="https://github.com/AmalrajPV"
              target="_blank"
              className="social-link"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a
              href="https://github.com/AmalrajPV"
              target="_blank"
              className="social-link"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
            <a
              href="https://github.com/AmalrajPV"
              target="_blank"
              className="social-link"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagramSquare} />
            </a>
            <a
              href="https://github.com/AmalrajPV"
              target="_blank"
              className="social-link"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://github.com/AmalrajPV"
              target="_blank"
              className="social-link"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
          </div>
        </div>
      </div>
      <div className="right-box">
        <RegularBox
          icon={<FontAwesomeIcon className="orange" icon={faAddressCard} />}
          content={
            props.data?.about
          }
          title={"Bio"}
        />

        <div className="prof-container">
          <UlBox
            title={"Education"}
            items={props.data?.education}
            icon={<FontAwesomeIcon className="orange" icon={faGraduationCap} />}
          />
          <UlBox
            title={"Experience"}
            items={props.data?.experience}
            icon={<FontAwesomeIcon className="orange" icon={faBriefcase} />}
          />
        </div>

        <div className="prof-container">
          <UlBox
            title={"Skills"}
            items={props.data?.skills}
            icon={<FontAwesomeIcon className="orange" icon={faCogs} />}
          />
          <UlBox
            title={"Projects"}
            items={props.data?.projects}
            icon={<FontAwesomeIcon className="orange" icon={faIndustry} />}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
